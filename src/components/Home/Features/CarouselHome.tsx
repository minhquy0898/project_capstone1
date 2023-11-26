import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './Carouse.css';
<link rel="stylesheet" href="carousel.css" />;

function CarouselHome() {
  return (
    <div className="h-[600px] backdrop-brightness-200">
      <Carousel showThumbs={false} autoPlay={true}>
        <div className="h-[600px] ">
          <img
            className="h-full"
            src="https://vov2.vov.vn/sites/default/files/styles/large/public/2021-12/san-khau-dam-cuoi-12.jpg"
          />
        </div>
        <div className="h-[600px]">
          <img
            className="h-full"
            src="https://sukienachau.com/wp-content/uploads/2022/03/to-chuc-dam-cuoi-dai-gia-1.jpg"
          />
        </div>
        <div className="h-[600px]">
          <img
            className="h-full"
            src="https://promice.vn/storage/uploads/20210528-unnamed-1.jpg"
          />
        </div>
        <div className="h-[600px]">
          <img
            className="h-full"
            src="https://palamunevent.com/wp-content/uploads/2021/09/bi-quyet-quan-ly-thoi-gian-cua-dan-to-chuc-su-kien-2-1.jpg"
          />
        </div>
        <div className="h-[600px]">
          <img
            className="h-full"
            src="https://palamunevent.com/wp-content/uploads/2021/09/bi-quyet-quan-ly-thoi-gian-cua-dan-to-chuc-su-kien-3-1.jpg"
          />
        </div>
        <div className="h-[600px]">
          <img
            className="h-full"
            src="https://promice.vn/storage/uploads/20210528-unnamed-1.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
