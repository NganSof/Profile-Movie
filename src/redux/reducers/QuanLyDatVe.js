import { GET_CHECKOUT, SET_BOOKING } from "../types/Type";

const stateDefalt = {
  checkOut: {},
  booking: {
    maLichChieu: null,
    danhSachVe: [
      // {
      //   maGhe: 0,
      //   giaVe: 0,
      // },
    ],
  },
};

const QuanLyDatVe = (state = stateDefalt, action) => {
  switch (action.type) {
    case GET_CHECKOUT:
      state.checkOut = action.payload;
      return { ...state };

    case SET_BOOKING:
      state.booking.maLichChieu = action.payload.idLC;
      state.booking.danhSachVe.push({
        maGhe: action.payload.maGhe,
        giaVe: action.payload.giaVe,
      });
      return { ...state };

    default:
      return { ...state };
  }
};
export default QuanLyDatVe;
