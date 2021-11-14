import React from "react";
import _ from "lodash";
import CurrencyFormat from "react-currency-format";
import { Modal, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Booking } from "../../../redux/actions/QuanLyDatVe";
const InfoCheckOut = (props) => {
  const dispatch = useDispatch();
  const { thongTinPhim } = props.checkOut;
  const { booking } = useSelector((state) => state.QuanLyDatVe);
  const { value } = props;

  const key = "updatable";
  const openMessage = () => {
    message.loading({ content: "Loading...", key });
    setTimeout(() => {
      message.success({ content: "Đặt mua vé thành công!", key, duration: 2 });
    }, 300);
  };
  function countDown() {
    let secondsToGo = 4;
    const modal = Modal.success({
      title: "Hiện các mã chưa được áp dụng",
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Thông báo tự động tắt sau ${secondsToGo} giây.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }
  const itemChair = () => {
    let sortItem = _.sortBy(value, ["tenGhe"]);
    return sortItem?.map((id, ind) => {
      return <span key={ind}>{id.tenGhe}</span>;
    });
  };

  const total = () => {
    let totalChair = value?.reduce((total, item) => {
      return (total += item.giaVe);
    }, 0);

    return totalChair.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };

  return (
    <div>
      <div className="mt-2 text-center text-4xl text-red-600 flex">
        <h3>Tổng tiền : {total()} </h3>
        {/* <CurrencyFormat
          className="w-72 pl-4 pb-4 focus:outline-none"
          value={total()}
          thousandSeparator={true}
          suffix={"VNĐ"} 
        /> */}
      </div>
      <hr />
      <div className=" py-2">
        <h3 className="text-center text-2xl">{thongTinPhim?.tenPhim}</h3>
        <p className="font-bold tracking-wider">{thongTinPhim?.tenCumRap}</p>
        <p>{thongTinPhim?.diaChi}</p>
        <div className="flex flex-row">
          <p className="mr-5">Rạp đang chiếu: </p>
          <p>{thongTinPhim?.tenRap}</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row">
        <p className="mr-5">Ngày khởi chiếu : </p>
        <p>{thongTinPhim?.ngayChieu}</p>
      </div>
      <div className="flex flex-row">
        <p className="mr-5">Giờ khởi chiếu : </p>
        <p>{thongTinPhim?.gioChieu}</p>
      </div>
      <hr />
      <div className="flex justify-between py-2 sm:flex-wrap md:justify-between">
        <span className="text-red-400 font-bold">Ghế đã chọn</span>
        {itemChair()}
      </div>
      <hr />
      <div className="flex justify-between py-2">
        <p className="w-3/4">Số điện thoại:</p>
        <p className="font-semibold tracking-widest ">0868781817</p>
      </div>
      <hr />
      <div className="flex justify-between py-2 sm:flex-wrap md:justify-between">
        <div>
          <h4 className="text-xl">Mã giảm giá</h4>
          <input
            className="focus:outline-none hover:shadow-inner"
            placeholder="Nhập mã giảm"
            type="text"
          />
        </div>
        <div className="pt-4">
          <Button onClick={countDown}>Áp dụng</Button>
        </div>
      </div>
      <hr />
      <div className="py-2 my-14 font-bold tracking-widest text-black">
        Ghi Chú:
        <div className="uppercase flex items-center mt-3">
          <button className="bg-red-200 w-14 h-14 shadow-xl rounded-2xl mr-4"></button>
          <p> ghế thường</p>
        </div>
        <div className="uppercase flex items-center mt-3">
          <button className="bg-white w-14 h-14 shadow-xl rounded-2xl mr-4"></button>
          <p> ghế vip</p>
        </div>
        <div className="uppercase flex items-center mt-3">
          <button className="bg-red-700 w-14 h-14 shadow-xl rounded-2xl mr-4"></button>
          <p> ghế đã đặt</p>
        </div>
        <div className="uppercase flex items-center mt-3">
          <button className="bg-green-400 w-14 h-14 shadow-xl rounded-2xl mr-4"></button>
          <p> ghế được chọn</p>
        </div>
        <div className="uppercase flex items-center mt-3">
          <button className="bg-yellow-500 w-14 h-14 shadow-xl rounded-2xl mr-4"></button>
          <p> ghế bạn đã đặt</p>
        </div>
      </div>
      <hr />
      <Button
        onClick={() => {
          dispatch(Booking(booking, openMessage));
          setTimeout(() => {
            window.location.reload();
          }, 600);
        }}
        style={{
          backgroundColor: "green",
          color: "whitesmoke",
          height: 50,
          fontSize: 25,
          fontWeight: "bold",
        }}
        className="w-96 ml-8 mt-14 mb-28 py-4 sm:w-36 md:w-96"
      >
        ĐẶT VÉ
      </Button>
      <div className="py-2 mt-18">
        <h2 className="uppercase text-red-600 font-extrabold ">lưu ý</h2>
        <div className="italic text-red-900 font-bold tracking-wide py-2">
          <span>* </span>
          VÉ ĐÃ MUA SẼ KHÔNG THỂ ĐỔI HOẶC HOÀN LẠI TIÈN . <br />
          <span>* </span> MỜI BẠN KIỂM TRA LẠI VÉ TRƯỚC KHI THAO TÁC
        </div>
      </div>
    </div>
  );
};

export default InfoCheckOut;
