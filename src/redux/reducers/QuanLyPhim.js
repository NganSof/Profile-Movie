import { SET_LIST_FILM, SET_INFO_FILM, SEARCH_NAME_FILM } from "../types/Type";

const stateDefutl = {
  arrFilm: [],
  detail: {},
  searchFilm: [],
};

export const QuanLyPhim = (state = stateDefutl, action) => {
  switch (action.type) {
    case SET_LIST_FILM:
      state.arrFilm = action.payload;
      return { ...state };

    case SET_INFO_FILM:
      state.detail = action.payload;
      return { ...state };

    case SEARCH_NAME_FILM:
      state.searchFilm = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
