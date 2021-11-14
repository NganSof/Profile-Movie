import { CreateAction } from "../types/CreateAction";
import {
  SET_CAMERA_CLUSTER,
  SET_INFO_SYSTEM_CLUSTER,
  SET_INFO_ID,
} from "../types/Type";
import { quanLyRap } from "../../services/QuanLyRapService";

export const getInfoTheaterCluster = () => {
  return async (dispatch) => {
    try {
      const res = await quanLyRap.getInfoTheaterCluster();
      dispatch(CreateAction(SET_CAMERA_CLUSTER, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};
export const getInfoSystemCluster = (maHTR) => {
  return async (dispatch) => {
    try {
      const res = await quanLyRap.getInfoSystemCluster(maHTR);
      dispatch(CreateAction(SET_INFO_SYSTEM_CLUSTER, res.data.content));
    } catch (error) {}
  };
};
export const getInfoID = (maP) => {
  return async (dispatch) => {
    try {
      const res = await quanLyRap.getInfoID(maP);
      dispatch(CreateAction(SET_INFO_ID, res.data.content));
    } catch (error) {
      console.log("error", error);
    }
  };
};
