import { Button, Card, CardBody, Checkbox } from '@nextui-org/react';
import { FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import CInput from '../../../components/CInput';
import useFormWithYup from '../../../hooks/useFormWithYup';
import { useLogin } from '../../../apis/auth.api';
import ErrorMessage from '../../../components/ErrorMessage';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Vui lòng nhập email!')
    .email('Email không hợp lệ!'),
  password: Yup.string()
    .required('Vui lòng nhập mật khẩu!')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự!'),
});

function Login() {
  const loginMutate = useLogin();

  const methods = useFormWithYup(loginSchema, {
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const submitHandler = handleSubmit((values) => {
    console.log('values', values);
    loginMutate.mutate(values);
  });

  console.log('loginMutate', loginMutate.data);

  return (
    <Card className="min-h-[500px]">
      <CardBody>
        <h1 className="mt-4 mb-10 text-center font-bold text-3xl">Đăng nhập</h1>
        <FormProvider {...methods}>
          <form onSubmit={submitHandler} className="min-w-[360px]">
            {/* <CInput name="firstname" placeholder="Nguyễn" label="Họ" />
            <CInput name="lastname" placeholder="Văn A" label="Tên" /> */}
            <CInput name="email" placeholder="abc@gmail.com" label="Email" />
            <CInput
              autoComplete="on"
              name="password"
              type="password"
              placeholder="Mật khẩu của bạn"
              label="Mật khẩu"
            />
            {!loginMutate.data?.isSuccess && (
              <ErrorMessage>{loginMutate.data?.msg}</ErrorMessage>
            )}
            <Checkbox>Ghi nhớ mật khẩu</Checkbox>
            <Button type="submit" fullWidth color="primary" className="mt-10">
              Đăng nhập
            </Button>
            <p className="mt-1 text-center">
              Bạn chưa có tài khoản?
              <Link className="ms-1 text-blue-500" to="/register">
                Đăng ký
              </Link>
            </p>
          </form>
        </FormProvider>
      </CardBody>
    </Card>
  );
}

export default Login;
