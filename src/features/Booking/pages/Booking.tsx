import { FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import useFormWithYup from '../../../hooks/useFormWithYup';
import TableBooking from '../components/TableBooking';
import CInput from '../../../components/CInput';
import CDatePicker from '../../../components/CDatePicker/CDatepicker';
import { Button } from '@nextui-org/react';
import { format } from 'date-fns';
import {
  useAllCategoriesService,
  useAllServicePack,
} from '../../Admin/apis/settingService.api';
import { useMemo, useState } from 'react';
import CSelect from '../../../components/CSelect';
import { useAddBooking, useGetSettingOptionService } from '../apis/booking.api';
import { IRenterItemPay } from '../../../types/common';

const bookingSchema = Yup.object().shape({
  name: Yup.string().required('Vui lòng nhập tên!'),
  email: Yup.string().required('Vui lòng nhập địa chỉ!'),
  phone: Yup.string().required('Vui lòng nhập số điện thoại!'),
  numberOfAttendes: Yup.number().required('Vui lòng nhập số lượng khách!'),
});

function Booking() {
  const [datarenters, setDataRenters] = useState<IRenterItemPay>();

  const methods = useFormWithYup(bookingSchema, {
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      numberOfAttendes: '',
      eventTime: null,
    },
  });
  const { data: categoriesService } = useAllCategoriesService();
  const { data: listServicePack } = useAllServicePack();

  const serviceOptions = useMemo(() => {
    if (categoriesService?.data.services.length) {
      return (
        categoriesService?.data.services.map((serviceItem) => ({
          label: serviceItem.title,
          value: serviceItem.id,
        })) || []
      );
    }
    return [];
  }, [categoriesService?.data]);

  const { handleSubmit, watch } = methods;
  const watchService = watch('service');

  const servicePackOptions = useMemo(() => {
    if (listServicePack?.data.services.length) {
      const targetService = listServicePack.data.services.find(
        (service) => service.id === watchService,
      );
      return targetService?.settings.map((setting) => ({
        label: setting.name,
        value: setting.name,
      }));
    }
    return [];
  }, [categoriesService?.data, watchService]);

  const watchServicePack = watch('servicePack');
  const { data: servicePackItem } = useGetSettingOptionService(
    watchService,
    watchServicePack,
  );

  const actionConfirm = (item: IRenterItemPay | undefined) => {
    setDataRenters(item);
  };

  const { mutate: addBooking } = useAddBooking();
  const submitHandler = handleSubmit((values) => {
    const newScheduledTime = values.eventTime
      ? format(values.eventTime as unknown as Date, 'yyyy/MM/dd hh:mm')
      : '';

    const submitValue = {
      ...values,
      eventTime: newScheduledTime,
      renters: datarenters?.renters.map((renter) => ({
        renter: renter.id,
        quantity: renter.quantity,
      })),
      totalAmount: datarenters?.totalAmount,
    };
    console.log('submitValue', submitValue);
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={submitHandler}>
          <label>THÔNG TIN KHÁCH HÀNG</label>
          <div className="w-1/3">
            <CInput label="Tên khách hàng" name="name" id="name" />

            <CInput
              label="Địa chỉ email"
              name="email"
              id="email"
              type="email"
            />
            <CInput label="Số điện thoại" name="phone" id="phone" />

            <CInput
              label="Lượng khách dự kiến"
              name="numberOfAttendes"
              id="numberOfAttendes"
            />
            <CInput label="Địa chỉ" name="address" id="address" />
            <CDatePicker
              name="eventTime"
              placeholderText="Nhập thời gian tổ chức"
            />

            <CSelect
              id="service"
              name="service"
              placeholder="Chọn dịch vụ"
              label="Dịch vụ"
              options={serviceOptions}
            />

            <CSelect
              id="servicePack"
              name="servicePack"
              placeholder="Gói dịch vụ"
              label="Dịch vụ"
              options={servicePackOptions ?? []}
            />
          </div>
          <TableBooking
            handleConfirm={actionConfirm}
            renterList={servicePackItem?.data?.setting?.renters ?? []}
          />
          <Button className="mt-5" type="submit">
            Đặt đơn hàng
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default Booking;
