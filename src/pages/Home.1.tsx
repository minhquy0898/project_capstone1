import { Badge, Image } from '@nextui-org/react';
import Value from '../components/Home/Features/Value';
import ServiceHome from '../components/Home/Features/ServiceHome';
import Advantage from '../components/Home/Features/Advantage';
import SliderHome from '../components/Home/Features/CarouselHome';

export function Home() {
  return (
    <>
      <SliderHome />
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
