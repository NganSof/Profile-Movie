import { CreateAction } from "../types/CreateAction";
import { INFO_USER, REMOVE_USER, UPLOAD_IMAGE } from "../types/Type";
import { quanLyNguoiDung } from "../../services/QuanLyNguoiDungService";
import { TOKEN } from "../../util/settings/config";

export const fetchSignIn = (value, page) => {
  return async (dispatch) => {
    try {
      const res = await quanLyNguoiDung.fetchSignIn(value);
      localStorage.setItem(TOKEN, res.data.content.accessToken);
      page();
    } catch (error) {
      alert("Mật khẩu hoặc Tài khoản chưa chính xác !!!");
    }
  };
};

export const fetchSignUp = (value, page) => {
  return async (dispatch) => {
    try {
      const res = await quanLyNguoiDung.fetchSignUp(value);
      page();
    } catch (error) {
      alert("Tài khoản đã tồn tại");
      console.log("error", error);
    }
  };
};

export const uploadImage = (val) => {
  return async (dispatch) => {
    await dispatch(CreateAction(UPLOAD_IMAGE, val));
  };
};

export const fetchInfouserAction = (tokenUser) => {
  return async (dispatch) => {
    try {
      const res = await quanLyNguoiDung.fetchInfouser(tokenUser);
      dispatch(CreateAction(INFO_USER, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleUser = (tokenUser) => {
  return async (dispatch) => {
    try {
      const res = await quanLyNguoiDung.deleteUser(tokenUser);
      dispatch(CreateAction(REMOVE_USER, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};
