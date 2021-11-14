import { CreateAction } from "../types/CreateAction";
import {
  SET_BANNER,
  SET_LIST_FILM,
  SET_INFO_FILM,
  SEARCH_NAME_FILM,
} from "../types/Type";
import { quanLyPhim } from "../../services/QuanLyPhimService";

export const getBaner = () => {
  return async (dispatch) => {
    try {
      const res = await quanLyPhim.LayDSBanner();
      dispatch(CreateAction(SET_BANNER, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getListFilm = () => {
  return async (dispatch) => {
    try {
      const res = await quanLyPhim.LayDSPhim();
      dispatch(CreateAction(SET_LIST_FILM, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getInfoFilm = (maP) => {
  return async (dispatch) => {
    try {
      const res = await quanLyPhim.layTTPhim(maP);
      dispatch(CreateAction(SET_INFO_FILM, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getSearchFilm = (tenP) => {
  return async (dispatch) => {
    try {
      const res = await quanLyPhim.LayPhim(tenP);
      console.log(res);
      dispatch(CreateAction(SEARCH_NAME_FILM, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};
