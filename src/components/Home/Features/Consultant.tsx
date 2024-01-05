import "./Consultant.css"
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
function Consultant() {
    return (
        <div className=" mt-20 flex justify-between consultant  ">
            <div className="flex items-center justify-center flex-col">
                <h1 className=" uppercase font-bold text-white text-3xl">Tư vấn khách hàng</h1>
                <p className="ml-10 text-white mt-6">DaNang Event sẽ gọi điện thoại tư vấn trực tiếp cho quý khách khi để lại thông tin :</p>
                <div className="flex mt-5">
                    <div className="flex mr-7 rounded-full p-3 bg-blue-400 ">
                        <span className="text-white items-center flex mr-3"><FaPhoneAlt /></span>
                        <p className="text-white mr-4"> 0898.240.032</p>
                    </div>
                    <div className="flex mr-2 rounded-full p-3 bg-blue-700 ">
                        <span className="text-white items-center flex mr-3"><FaFacebookF /></span>
                        <p className=" uppercase text-white mr-4">Chat zalo</p>
                    </div>
                </div>
            </div>
            <div className="bg-white bg-opacity-40 p-16 w-[600px] rounded-md">
                <form action="">
                    <div className="mb-4">
                        <input className="w-[490px] h-[40px] rounded-md text-black" type="text" placeholder="Tên quý khách" />
                    </div>
                    <div className="mb-4">
                        <div>
                            <input className="w-[490px] h-[40px]  rounded-md" type="text" placeholder="Số điện thoại" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div>
                            <input className="w-[490px] h-[40px]  rounded-md" type="email" placeholder="Địa chỉ email" />
                        </div>
                    </div>
                    <div className="">
                        <select className=" w-[490px] h-[40px]  rounded-md" id="event">
                            <option value="0">Tổ chức ngoại khóa</option>
                            <option value="1">Tiệc cưới</option>
                            <option value="2">Đám hỏi</option>
                            <option value="3">Trung thu</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center">
                        <textarea className="w-[300px] rounded-md mt-4">

                        </textarea>
                        <button className=" bg-blue-700 h-[40px] w-[150px] rounded-md text-white">Gửi thông tin</button>
                    </div>

                </form>
            </div >
        </div >
    )
}

export default Consultant
