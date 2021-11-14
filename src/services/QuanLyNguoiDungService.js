import React, { Component } from "react";
import { baseService } from "./baseServices";

class QuanLyNguoiDungService extends baseService {
  fetchSignIn = (value) => {
    return this.post(`api/QuanLyNguoiDung/DangNhap`, value);
  };
  fetchSignUp = (value) => {
    return this.post(`api/QuanLyNguoiDung/DangKy`, value);
  };
  fetchInfouser = (tokenUser) => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`, tokenUser);
  };
  deleteUser = (maUser) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${maUser}`);
  };
}
export const quanLyNguoiDung = new QuanLyNguoiDungService();
