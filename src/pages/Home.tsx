import Value from '../components/Home/Features/Value';
import ServiceHome from '../components/Home/Features/ServiceHome';
import Advantage from '../components/Home/Features/Advantage';
import CarouselHome from '../components/Home/Features/CarouselHome';

function Home() {
  return (
    <>
      <div className="relative">
        <CarouselHome />
        <div className="text-4xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-8 rounded-md">
          <h5 className="font-bold text-white">CÔNG TY TỔ CHỨC SỰ KIỆN</h5>
          <h3 className="font-bold text-7xl text-yellow-400">Đà Nẵng EVENT</h3>
        </div>
      </div>

      <Value />
      <Advantage />
      <ServiceHome />
    </>
  );
}

export default Home;
