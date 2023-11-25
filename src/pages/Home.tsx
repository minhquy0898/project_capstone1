import { Badge, Image } from '@nextui-org/react';
import 'swiper/css';
import Advantage from '../components/Home/Features/advantage';
import Value from '../components/Home/Features/Value';
import ServiceHome from '../components/Home/Features/ServiceHome';

function Home() {
  return (
    <>
      <Image
        height={500}
        className="w-screen "
        alt="NextUI hero Image with delay"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqKvSwhm3eQpWD7jvoTbQiy4lwjo2RgFLAPg&usqp=CAU"
      />
      <h5>Công ty tổ chức sự kiện</h5>
      <Badge>Đà Nẵng EVENT</Badge>
      <Value />
      <Advantage />

      <ServiceHome />
    </>
  );
}

export default Home;
