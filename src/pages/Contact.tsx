const Contact = () => {
    return (
        <div>
            <div>
                <p>Liên hệ tổ chức sự kiện : 0898240032 ( Mr Quý )</p>
                <p>Website : https://Danangevent.com</p>
                <p>Fanpage : DaNang Event</p>
                <p>Email : danangevent@gmail.com</p>
            </div>
            <div className=' mt-16'>
                <form action="">
                    <label htmlFor="">Họ và tên</label>
                    <br />
                    <input className=' border-solid border border-black rounded-md mt-6 w-[250px]' type="text" /><br />
                    <label htmlFor="">Họ và tên</label>
                    <br />
                    <input className=' border-solid border border-black rounded-md mt-6 w-[250px]' type="text" /><br /> <br />
                    <label htmlFor="">Họ và tên</label>
                    <br />
                    <input className=' border-solid border border-black rounded-md mt-6 w-[250px]' type="text" />
                </form>
            </div>
        </div>
    )
}

export default Contact
