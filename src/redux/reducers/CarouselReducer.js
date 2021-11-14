import { SET_BANNER } from "../types/Type";

const stateDefault = {
  arrImg: [],
};
export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_BANNER:
      state.arrImg = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
