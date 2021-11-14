import {
  SET_CAMERA_CLUSTER,
  SET_INFO_SYSTEM_CLUSTER,
  SET_INFO_ID,
} from "../types/Type";
const stateDefault = {
  cluster: [],
  infoSystem: [],
  infoId: [],
};
export const QuanLyRap = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAMERA_CLUSTER:
      state.cluster = action.payload;
      return { ...state };

    case SET_INFO_SYSTEM_CLUSTER:
      state.infoSystem = action.payload;
      return { ...state };

    case SET_INFO_ID:
      state.infoId = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
