import { Card, CardBody } from '@nextui-org/react';
import APP_IMAGES from '../assets/images';
const valueList = [
  { title: 'Liên hệ tổ chức sự kiện', data: '0974072720 (Mr Hùng Trần)' },
  { title: 'Website', data: 'https://Danangevent.com/' },
  { title: 'Fanpage', data: 'DaNang  Event' },
  { title: 'Email', data: 'danangevent@gmail.com' },
];
function Introduce() {
  return (
    <>
      <div className="relative">
        <img
          className="h-[700px] backdrop-brightness-200 w-full"
          src={APP_IMAGES.bgIntroduce}
        />
        <div className="text-4xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-8 rounded-md">
          <h5 className="font-bold text-white">CÔNG TY TỔ CHỨC SỰ KIỆN</h5>
          <h3 className="font-bold text-7xl text-yellow-400">Đà Nẵng EVENT</h3>
        </div>
      </div>
      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Giới Thiệu Chung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700">
              Danang Event là một công ty tiên phong trong lĩnh vực cung cấp
              dịch vụ sự kiện tại thành phố Đà Nẵng, một trong những địa điểm du
              lịch nổi tiếng tại Việt Nam. Với một đội ngũ chuyên nghiệp, sáng
              tạo và giàu kinh nghiệm, Danang Event đã định vị mình là một đối
              tác đáng tin cậy cho việc tổ chức các sự kiện không chỉ tại Đà
              Nẵng mà còn cả khu vực lân cận. Với đội ngũ chuyên nghiệp và tận
              tâm, sẵn sàng đảm nhiệm trách nhiệm tổ chức từ A đến Z cho bất kỳ
              loại sự kiện nào. Từ việc lên ý tưởng ban đầu, thiết kế, lập kế
              hoạch, đến thực hiện và quản lý sự kiện trong ngày, công ty này
              đảm bảo mỗi sự kiện diễn ra một cách trôi chảy và thành công.Cung
              cấp các giải pháp thiết kế sự kiện sáng tạo, từ trang trí đến âm
              thanh, ánh sáng, và hiệu ứng đặc biệt.
            </p>
            <p>
              Thiết kế sự kiện của họ giúp tạo ra không gian độc đáo và ấn
              tượng, thích hợp cho mọi mục tiêu và đối tượng của sự kiện. Công
              ty sở hữu một loạt trang thiết bị sự kiện hiện đại, từ thiết bị âm
              thanh và ánh sáng đến màn hình LED và sân khấu. Họ cung cấp dịch
              vụ cho thuê trang thiết bị đáng tin cậy để đảm bảo sự kiện của bạn
              diễn ra một cách suôn sẻ.Và cũng hỗ trợ các sự kiện trong việc
              quảng cáo và tiếp thị. Họ có kiến thức sâu rộng về cách xây dựng
              chiến dịch truyền thông hiệu quả để thu hút sự chú ý và tham gia
              của khán giả mục tiêu. Danang Event cam kết đem đến sự sáng tạo,
              chất lượng, và chuyên nghiệp cho mọi sự kiện họ tham gia. Sự kết
              hợp giữa kỹ thuật, nghệ thuật, và tâm huyết trong công việc làm
              cho công ty này trở thành một đối tác tin cậy cho việc tổ chức các
              sự kiện tại Đà Nẵng và khu vực lân cận.
            </p>
          </div>

          <div>
            <img
              src="https://www.yamewedding.vn/resource/gellary/images/banner/trang-tri-tiec-cuoi-tphcm-13.JPG"
              alt="Sample Image"
              className="rounded-md h-3/4"
            />
          </div>
        </div>

        <Card className="w-1/2">
          <CardBody>
            <ul className="text-lg text-gray-400 -mb-2 ">
              {valueList.map((value) => (
                <li key={value.title} className="flex items-baseline mb-2">
                  <svg
                    className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <b>{value.title}: </b>
                  <span className="ms-1">{value.data}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default Introduce;
