import { INFO_USER, REMOVE_USER, UPLOAD_IMAGE } from "./../types/Type";

const stateDefault = {
  infoUser: {},
};
export const QuanLyNguoiDung = (state = stateDefault, action) => {
  switch (action.type) {
    case INFO_USER:
      state.infoUser = { ...action.payload, hinhAnh: "" };
      return { ...state };

    case REMOVE_USER:
      const clone = {};
      state.infoUser = clone;
      return { ...state };

    case UPLOAD_IMAGE:
      const cloneUser = { ...state.infoUser, hinhAnh: action.payload };
      state.infoUser = cloneUser;
      return { ...state };
    default:
      return { ...state };
  }
};
