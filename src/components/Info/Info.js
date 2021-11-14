import React, { useState } from "react";
import { Rate } from "antd";
import { FiFacebook, FiTwitter, SiZalo, BsInstagram } from "react-icons/all";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../redux/actions/QuanLyNguoiDung";

const Info = (props) => {
  const { infoUser } = props;
  const dispatch = useDispatch();
  const value = `https://i.pravatar.cc/150?u=${infoUser.hoTen}`;
  const [avatar, setAvatar] = useState(value);
  const handleChosse = (val) => {
    dispatch(uploadImage(val));
    setAvatar(val);
  };
  return (
    <div className="font-mono">
      <h1 className="text-2xl uppercase font-extrabold text-red-200">
        thông tin của {infoUser.taiKhoan}
      </h1>
      <div className="ml-44 my-10 sm:w-20 sm:ml-8 md:w-full md:ml-44">
        <img
          className="rounded-full"
          src={infoUser.hinhAnh ? infoUser.hinhAnh : avatar}
          alt="ảnh đại diện"
        />
      </div>
      <div>
        <h1 className="text-red-200  text-lg pb-6">Thay ảnh đại diện có sẵn</h1>
        <div className="flex justify-around">
          <div
            className="cursor-pointer"
            onClick={() =>
              handleChosse(`https://i.pravatar.cc/150?u=${infoUser.email}`)
            }
          >
            <img
              className="rounded-full w-24 sm:w-10 md:w-24"
              src={`https://i.pravatar.cc/150?u=${infoUser.email}`}
              alt="ảnh đại diện"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              handleChosse(`https://i.pravatar.cc/150?u=${infoUser.matKhau}`)
            }
          >
            <img
              className="rounded-full w-24 sm:w-10 md:w-24"
              src={`https://i.pravatar.cc/150?u=${infoUser.matKhau}`}
              alt="ảnh đại diện"
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() =>
              handleChosse(`https://i.pravatar.cc/150?u=${infoUser.taiKhoan}`)
            }
          >
            <img
              className="rounded-full w-24 sm:w-10 md:w-24"
              src={`https://i.pravatar.cc/150?u=${infoUser.taiKhoan}`}
              alt="ảnh đại diện"
            />
          </div>
        </div>
      </div>
      <div className="text-lg flex justify-around mt-9 mb-6 sm:flex-wrap md:justify-around">
        <h2 className="text-red-200">Đánh giá ứng dụng</h2>
        <Rate allowHalf defaultValue={4} allowClear />
      </div>
      <div className="border-t-2 border-red-200 shadow-2xl">
        <div className="flex justify-evenly py-10 bg-red-900 sm:bg-green-600 md:bg-red-900 sm:flex-wrap sm:py-24 sm:mt-4 md:justify-evenly">
          <a
            href="https://www.facebook.com"
            target={`_blank`}
            className="cursor-pointer pt-3 py-10 w-24 h-24 rounded-full shadow-2xl hover:bg-red-200 hover:shadow-inner list-none md:inline-block sm:contents "
          >
            <FiFacebook className="w-20 h-20 pl-2 pb-3 text-yellow-200 hover:text-red-900 " />
          </a>
          <a
            href="https://www.instagram.com"
            target={`_blank`}
            className="cursor-pointer pt-3 py-10 w-24 h-24 rounded-full shadow-2xl hover:bg-red-200 hover:shadow-inner list-none md:inline-block sm:contents"
          >
            <BsInstagram className="w-20 h-20 pl-4 pb-3 text-yellow-200 hover:text-red-900" />
          </a>
          <a
            href="https://twitter.com"
            target={`_blank`}
            className="cursor-pointer pt-3 py-10 w-24 h-24 rounded-full shadow-2xl hover:bg-red-200 hover:shadow-inner list-none md:inline-block sm:contents"
          >
            <FiTwitter className="w-20 h-20 pl-4 text-yellow-200 hover:text-red-900" />
          </a>
          <a
            href="https://zalo.me"
            target={`_blank`}
            className="cursor-pointer pt-3 py-10 w-24 h-24 rounded-full shadow-2xl hover:bg-red-200 hover:shadow-inner list-none md:inline-block sm:contents"
          >
            <SiZalo className="w-20 h-20 pl-4 pb-3 text-yellow-200 hover:text-red-900" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
