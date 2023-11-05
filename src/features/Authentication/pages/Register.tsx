import { Button, Card, CardBody, Checkbox } from '@nextui-org/react';
import { FormProvider, useForm } from 'react-hook-form';
import CInput from '../../../components/CInput';
import { Link } from 'react-router-dom';

function Register() {
  const methods = useForm();

  return (
    <Card className="min-h-[500px]">
      <CardBody>
        <h1 className="mt-4 mb-10 text-center font-bold text-3xl">
          Đăng ký tài khoản
        </h1>
        <FormProvider {...methods}>
          <form className="min-w-[360px]">
            <CInput name="firstname" placeholder="Nguyễn" label="Họ" />
            <CInput name="lastname" placeholder="Văn A" label="Tên" />
            <CInput name="email" placeholder="abc@gmail.com" label="Email" />
            <CInput
              autoComplete="on"
              name="password"
              type="password"
              placeholder="Mật khẩu của bạn"
              label="Mật khẩu"
            />
            <Checkbox>Ghi nhớ mật khẩu</Checkbox>
            <Button fullWidth color="primary" className="mt-10">
              Đăng ký
            </Button>
            <p className="mt-1 text-center">
              Bạn đã có tài khoản?
              <Link className="ms-1 text-blue-500" to="/login">
                Đăng nhập
              </Link>
            </p>
          </form>
        </FormProvider>
      </CardBody>
    </Card>
  );
}

export default Register;
