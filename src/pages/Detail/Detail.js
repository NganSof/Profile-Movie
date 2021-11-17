import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Detail.css";
import { Rate } from "antd";
import { Tabs } from "antd";
import { getInfoID } from "../../redux/actions/QuanLyRap";
import moment from "moment";
import InfoDetail from "./InfoDetail/InfoDetail";
import { getInfoFilm } from "../../redux/actions/Carousel";
import { useHistory, useParams } from "react-router";
import CurrencyFormat from "react-currency-format";

const { TabPane } = Tabs;

const Detail = (props) => {
  // const { idMovie } = props.match.params;
  const { idMovie } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoFilm(idMovie));
    dispatch(getInfoID(idMovie));
  }, [idMovie, dispatch]);

  const [tab, setTab] = useState({
    tabPosition: "left",
  });
  const { tabPosition } = tab;
  const [state, setState] = useState({
    size: "small",
  });
  const { size } = state;

  const desc = ["20%", "40%", "60%", "80%", "100%"];
  const [review, setReview] = useState({
    value: 3,
  });
  const handleChange = (value) => {
    setReview({ value });
  };
  const { value } = review;
  const { detail } = useSelector((state) => {
    return state.QuanLyPhim;
  });
  const { infoId } = useSelector((state) => {
    return state.QuanLyRap;
  });
  const history = useHistory();

  const handleBooking = (maLichChieu) => {
    history.push(`/checkout/${maLichChieu}`);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${detail.hinhAnh})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ minHeight: "100vh", backgroundColor: "rgb(0,0,0,0.4)" }}
        effectColor="#fff"
        color="#fff"
        blur={10}
        borderRadius={0}
      >
        <div className="grid grid-cols-12 gap-8 mt-10 sm:contents md:inline-grid">
          <div className="col-span-6 col-start-3 sm:inline-flex md:col-start-1 xl:col-start-2">
            <div className="grid grid-cols-3 sm:block md:grid md:col-span-2 md:ml-5 xl:col-span-3">
              <img
                src={detail.hinhAnh}
                alt="Ảnh Phim"
                className="sm:w-96 sm:h-80 w-full h-full "
              />
              <div className="pl-6 pt-12 xl:text-xl text-white col-span-2 z-30">
                <div className="flex items-center ">
                  <p className="text-xl text-red-400 italic mr-2 font-bold">
                    Tên phim :
                  </p>
                  <p className="tracking-wider text-xl">{detail.tenPhim}</p>
                </div>
                <div>
                  <p className="text-xl text-red-400 italic mr-2 font-bold">
                    Mô tả :
                  </p>
                  <p className="tracking-wider text-xl">{detail.moTa}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 ml-40 sm:ml-20 md:ml-24 xl:ml-40 sm:mt-20 md:mt-0">
            <div className="w-48 h-44 sm:w-28 sm:h-28 md:w-48 md:h-48 ">
              <CircularProgressbar
                value={detail.danhGia * 10}
                text={`${detail.danhGia * 10}%`}
                strokeWidth={5}
              />
              <div className="mt-10 ml-10 sm:ml-3 md:ml-10 sm:w-max md:w-full">
                <Rate tooltips={desc} onChange={handleChange} value={value} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-40 rounded-2xl shadow-2xl py-10 "
          style={{ backgroundColor: "rgba(48, 46, 64, 0.53)" }}
        >
          <Tabs defaultActiveKey="1" type="card" size={size}>
            <TabPane tab="Lịch Chiếu" key="1" className="container">
              <Tabs tabPosition={tabPosition} className="container">
                {infoId.heThongRapChieu?.map((id, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="flex justify-around items-center sm:w-14 sm:pl-3 md:pl-0 md:w-64 xl:w-full sm:inline-flex md:justify-around">
                          <img
                            src={id.logo}
                            alt="logo"
                            className="w-20 h-20 mr-10 md:w-12 md:h-12 md:ml-4 xl:w-20 xl:h-20 sm:object-contain"
                          />
                          <div className="sm:hidden md:inline-flex md:text-xl md:pr-5 xl:text-4xl uppercase">
                            {id.tenHeThongRap}
                          </div>
                        </div>
                      }
                      key={index}
                    >
                      {id.cumRapChieu?.map((cumRC, index) => {
                        return (
                          <div
                            className="flex justify-around items-center mt-5 text-white sm:-ml-10 md:justify-around md:ml-0 xl:ml-8"
                            key={index}
                          >
                            <img
                              src={cumRC.hinhAnh}
                              alt="địa chỉ"
                              className="w-40 h-40 xl:w-40 xl:h-40 md:w-32 md:h-32 md:pl-5 md:ml-16 xl:ml-0 sm:hidden md:inline-flex"
                            />
                            <div className="ml-20">
                              <div className="sm:w-full md:w-full xl:w-full xl:text-xl tracking-wide text-lg">
                                <div className="sm:w-32 md:w-60 md:pr-16 xl:w-full xl:pr-0">
                                  Tên rạp : {cumRC.tenCumRap}
                                </div>
                                <div className="sm:w-32 md:w-60 md:pr-16 xl:w-full xl:pr-0">
                                  Địa chỉ : {cumRC.diaChi}
                                </div>
                              </div>
                              <div>
                                {cumRC.lichChieuPhim?.map((lc, ind) => {
                                  return (
                                    <div
                                      key={ind}
                                      className="text-lg sm:w-32 xl:w-full md:w-60"
                                    >
                                      <div className="mt-3 md:w-60 md:pr-16 xl:w-full xl:pr-0 xl:text-2xl">
                                        <p className="text-yellow-300 italic font-extrabold">
                                          Ngày khởi chiếu :{" "}
                                          {moment(lc.ngayChieuGioChieu).format(
                                            "hh:mm A DD-MM-yyyy"
                                          )}
                                        </p>
                                      </div>
                                      <div className="grid col-span-2 my-10 text-xl shadow-2xl">
                                        <div className="flex justify-around items-center text-lg font-bold tracking-widest border-t-2 border-red-600 rounded-t-xl pt-10 sm:flex-wrap md:flex-none md:w-64 md:pr-16 xl:w-full xl:pr-0">
                                          <div className="md:pl-5 xl:pl-0 sm:pl-4">
                                            Tên rạp : {lc.tenRap}
                                          </div>
                                          <div className="md:pl-5 xl:pl-0 sm:pl-4">
                                            Mã rạp : {lc.maRap}
                                          </div>
                                        </div>
                                        <div className="pt-4 flex justify-around items-center sm:flex-wrap md:flex-none md:w-64 xl:w-full ">
                                          <p className="italic text-red-600 font-extrabold tracking-wide text-xl sm:pl-5 md:pl-0">
                                            Giá vé : <abbr />
                                            {lc.giaVe.toLocaleString("vi-VN", {
                                              style: "currency",
                                              currency: "VND",
                                            })}
                                            {/* <CurrencyFormat
                                              value={lc.giaVe}   
                                              displayType={"text"}
                                              thousandSeparator={true}
                                              suffix={"VNĐ"}
                                            /> */}
                                          </p>
                                          <div className="md:pl-5 pb-4">
                                            <button
                                              onClick={() =>
                                                handleBooking(lc.maLichChieu)
                                              }
                                              className=" text-white font-extrabold tracking-wide uppercase rounded-xl bg-red-800 shadow-2xl hover:text-red-800 hover:bg-white p-3"
                                            >
                                              đặt vé
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane tab="Thông tin" key="2">
              <InfoDetail detail={detail} />
            </TabPane>
            <TabPane tab="Đánh giá" key="3">
              <div className="text-xl italic h-40 text-center pt-20 text-white">
                Hiện chưa có thông tin
              </div>
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
};

export default Detail;
