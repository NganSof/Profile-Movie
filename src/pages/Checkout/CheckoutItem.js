import React from "react";
import { useState } from "react";
import { CloseOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CreateAction } from "../../redux/types/CreateAction";
import { SET_BOOKING } from "../../redux/types/Type";

const CheckoutItem = (props) => {
  const { idLC } = useParams();
  const dispatch = useDispatch();
  const { item, handleBooking, ind } = props;
  const [chair, setChair] = useState(false);
  const { infoUser } = useSelector((state) => state.QuanLyNguoiDung);

  const handleClick = (item) => {
    handleBooking(item);
    setChair(!chair);
    console.log("item", item);
    dispatch(CreateAction(SET_BOOKING, { ...item, idLC: +idLC }));
  };

  return (
    <>
      <button
        key={(ind + 1) % 20 === 0 ? <br /> : ""}
        disabled={item.daDat}
        className={`${
          item.taiKhoanNguoiDat === infoUser.taiKhoan
            ? "bg-yellow-500 cursor-not-allowed"
            : item.daDat
            ? "cursor-not-allowed bg-red-700"
            : chair
            ? "bg-green-400"
            : item.loaiGhe === "Thuong"
            ? "bg-red-200"
            : "bg-white"
        }   m-4 rounded-lg shadow-xl text-xl hover:shadow-inner text-red-500 w-14 h-14`}
        onClick={() => {
          handleClick(item);
        }}
      >
        {item.taiKhoanNguoiDat === infoUser.taiKhoan ? (
          <UserDeleteOutlined
            style={{ color: "white", fontSize: "xx-large" }}
          />
        ) : item.daDat ? (
          <CloseOutlined style={{ color: "white", fontSize: "xx-large" }} />
        ) : (
          `${item.tenGhe}`
        )}
      </button>
    </>
  );
};

export default CheckoutItem;
