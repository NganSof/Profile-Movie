import React, { Component } from "react";
import { TOKEN } from "../util/settings/config";
import { baseService } from "./baseServices";

class QuanLyDatVeService extends baseService {
  CheckOut = (maLC) => {
    return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLC}`);
  };
  booking = (dsGhe) => {
    return this.post(`api/QuanLyDatVe/DatVe`, dsGhe);
  };
}

export const quanLyDatVe = new QuanLyDatVeService();
