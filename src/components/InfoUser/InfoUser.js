import React, { Fragment, useState } from "react";
import ProfileBooking from "../../pages/Profile/ProfileBooking/ProfileBooking";

const InfoUser = (props) => {
  const {
    hoTen,
    taiKhoan,
    email,
    matKhau,
    maNhom,
    thongTinDatVe,
    loaiNguoiDung,
  } = props.infoUser;

  return (
    <div className="mt-40">
      <div className="text-center mt-10 text-lg font-bold text-red-300 font-mono grid grid-cols-2 md:grid sm:contents sm:mt-2 md:mt-10">
        <div className="col-span-1">
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-24 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Họ tên:</label>
            <span className="w-3/4">{hoTen}</span>
          </div>
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-24 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Tài khoản:</label>
            <span className="w-3/4">{taiKhoan}</span>
          </div>
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-24 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Mật khẩu:</label>
            <span className="w-3/4">{matKhau}</span>
          </div>
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-24 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Email:</label>
            <span className="w-3/4">{email}</span>
          </div>
        </div>

        <div className="col-span-1">
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-16 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Số điện thoại:</label>
            <span className="italic w-3/4">0868781817</span>
          </div>
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-16 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Mã nhóm:</label>
            <span className="w-3/4">{maNhom}</span>
          </div>
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-16 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Nhóm người dùng:</label>
            <span className="w-3/4">{loaiNguoiDung?.tenLoai}</span>
          </div>
          <div className="w-96 flex justify-around px-4 bg-red-700 py-5 mb-5 ml-16 border-l-4 rounded-2xl border-red-900 hover:text-yellow-300 hover:border-red-700 hover:bg-green-700 shadow-xl sm:ml-3 md:ml-24 sm:w-72 md:w-96">
            <label className="w-full">Phim đã mua vé:</label>
            <span className="w-3/4 italic">
              {thongTinDatVe?.length ? (
                <ProfileBooking
                  // list={thongTinDatVe}
                  danhSachGhe={thongTinDatVe
                    .map((item) => {
                      console.log(item);
                      return item.danhSachGhe;
                    })
                    .flat()}
                />
              ) : (
                "Đang cập nhật"
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
