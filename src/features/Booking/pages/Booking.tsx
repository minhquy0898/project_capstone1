import { FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import useFormWithYup from '../../../hooks/useFormWithYup';
import TableBooking from '../components/TableBooking';
import CInput from '../../../components/CInput';
import CDatePicker from '../../../components/CDatePicker/CDatepicker';
import { Button } from '@nextui-org/react';
import { format } from 'date-fns';
import { useAllCategoriesService } from '../../Admin/apis/settingService.api';
import { useMemo } from 'react';
import CSelect from '../../../components/CSelect';
import { useGetSettingOptionService } from '../apis/booking.api';

const bookingSchema = Yup.object().shape({
  // customerName: Yup.string().required('Vui lòng chọn loại dịch vụ!'),
  // email: Yup.string().required('Vui lòng nhập địa chỉ!'),
  // numberOfAttendes: Yup.string().required('Vui lòng nhập số điện thoại!'),
});

function Booking() {
  const methods = useFormWithYup(bookingSchema, {
    defaultValues: {
      customerName: '',
      email: '',
      phoneNumber: '',
      numberOfAttendes: '',
      eventTime: null,
    },
  });
  const { data: categoriesService } = useAllCategoriesService();

  const serviceOptions = useMemo(() => {
    if (categoriesService?.data.services.length) {
      return categoriesService?.data.services.map((serviceItem) => ({
        label: serviceItem.title,
        value: serviceItem.id,
      }));
    }
    return [];
  }, [categoriesService?.data]);

  const { handleSubmit, watch } = methods;
  const watchService = watch('service');
  const { data: dataOptions } = useGetSettingOptionService(watchService);
  console.log('dataOptions', dataOptions);

  const servicePackOptions = useMemo(() => {
    if (dataOptions?.data.setting.length) {
      return dataOptions?.data.setting.map((setting) => ({
        label: setting.name,
        value: setting.id,
      }));
    }
    return [];
  }, [categoriesService?.data]);

  const submitHandler = handleSubmit((values) => {
    const newScheduledTime = values.eventTime
      ? format(values.eventTime as unknown as Date, 'yyyy/MM/dd hh:mm')
      : '';
    console.log(newScheduledTime);
  });

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={submitHandler}>
          <label>THÔNG TIN KHÁCH HÀNG</label>
          <div className="w-1/3">
            <CInput
              label="Tên khách hàng"
              name="customerName"
              id="customerName"
            />

            <CInput
              label="Địa chỉ email"
              name="email"
              id="email"
              type="email"
            />
            <CInput label="Số điện thoại" name="phoneNumber" id="phoneNumber" />

            <CInput
              label="Lượng khách dự kiến"
              name="numberOfAttendes"
              id="phoneNumber"
            />
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
              options={servicePackOptions}
            />
          </div>
          <TableBooking />
          {/* <Button className="mt-5" type="submit">
            Submit
          </Button> */}
        </form>
      </FormProvider>
    </div>
  );
}

export default Booking;
