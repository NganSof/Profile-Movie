import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import QuanLyDatVe from "./reducers/QuanLyDatVe";
import { QuanLyNguoiDung } from "./reducers/QuanLyNguoiDung";
import { QuanLyPhim } from "./reducers/QuanLyPhim";
import { QuanLyRap } from "./reducers/QuanLyRap";

const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhim,
  QuanLyRap,
  QuanLyNguoiDung,
  QuanLyDatVe,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
