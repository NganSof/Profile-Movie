import React from "react";
import { CreateAction } from "./../types/CreateAction";
import { GET_CHECKOUT } from "./../types/Type";
import { quanLyDatVe } from "../../services/QuanLyDatVeService";
import { TOKEN } from "../../util/settings/config";

export const getCheckOut = (maLC) => {
  return async (dispatch) => {
    try {
      const res = await quanLyDatVe.CheckOut(maLC);
      dispatch(CreateAction(GET_CHECKOUT, res.data.content));
    } catch (error) {
      console.log("error", error.respone);
    }
  };
};
export const Booking = (dsGhe, notify) => {
  return async (dispatch) => {
    try {
      const res = await quanLyDatVe.booking(dsGhe);
      notify();
    } catch (error) {
      console.log("error", error);
      alert("Mời bạn chọn ghế");
    }
  };
};
