import { FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import useFormWithYup from '../../../hooks/useFormWithYup';
import TableBooking from '../components/TableBooking';

const bookingSchema = Yup.object().shape({
  event: Yup.string().required('Vui lòng chọn loại dịch vụ!'),
  address: Yup.string().required('Vui lòng nhập địa chỉ!'),
  phone: Yup.string().required('Vui lòng nhập số điện thoại!'),
});

function Booking() {
  const methods = useFormWithYup(bookingSchema, {
    defaultValues: {
      event: null,
      address: '',
      phone: '',
    },
  });
  const { handleSubmit } = methods;

  const submitHandler = handleSubmit((values) => {});

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={submitHandler}>
          <TableBooking />
        </form>
      </FormProvider>
    </div>
  );
}

export default Booking;
