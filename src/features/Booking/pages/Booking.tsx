import { FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import useFormWithYup from '../../../hooks/useFormWithYup';
import TableBooking from '../components/TableBooking';
import CInput from '../../../components/CInput';
import CDatePicker from '../../../components/CDatePicker/CDatepicker';
import { Button } from '@nextui-org/react';
import { format } from 'date-fns';

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
  const { handleSubmit } = methods;

  const submitHandler = handleSubmit((values) => {
    console.log('values', values);
    const newScheduledTime = values.eventTime
      ? format(values.eventTime as unknown as Date, 'yyyy/MM/dd hh:mm')
      : '';
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
          </div>
          <TableBooking />
          <Button className="mt-5" type="submit">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

export default Booking;
