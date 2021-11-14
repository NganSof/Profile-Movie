import moment from "moment";
import React from "react";
import ReactPlayer from "react-player";

const InfoDetail = (props) => {
  const item = props.detail;
  console.log("item", item);
  return (
    <div className="container text-white text-xl my-14 md:ml-40 xl:ml-0">
      <div className="md:flex justify-around md:justify-between xl:justify-around">
        <div className=" md:col-start-1 md:col-span-2 md:grid xl:justify-evenly">
          <div className="flex justify-between md:justify-around xl:justify-evenly">
            <p className="w-full">Tên Phim : </p>
            <p className="w-3/4	">{item.tenPhim}</p>
          </div>
          <div className="flex justify-between md:justify-around xl:justify-evenly">
            <p className="w-full">Mã phim : </p>
            <p className="w-3/4	">{item.maPhim}</p>
          </div>
          <div className="flex justify-between md:justify-around xl:justify-evenly">
            <p className="w-full">Đao diễn : </p>
            <p className="text-red-500 italic w-full">Đang cập nhật</p>
          </div>
          <div className="flex justify-between w-full md:justify-around xl:justify-evenly">
            <p className="w-full pr-5">Diễn viên chính : </p>
            <p className="text-red-500 italic w-full">Đang cập nhật</p>
          </div>
          <div className="flex justify-between md:justify-around xl:justify-evenly">
            <p className="w-full">Đánh giá : </p>
            <p className="w-3/4	 ">{item.danhGia}</p>
          </div>
          <div className="flex justify-between w-full md:justify-around xl:justify-evenly">
            <p className="w-full">Ngày khởi chiếu : </p>
            <p className="w-3/4	">
              {moment(item.ngayKhoiChieu).format("DD-MM-yyyy")}
            </p>
          </div>
        </div>
        <div className="md:mt-6 xl:mt-0 sm:mt-10 sm:-ml-5 md:ml-0">
          <ReactPlayer url={item.trailer} width="400px" light controls={true} />
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
