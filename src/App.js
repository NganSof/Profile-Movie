import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Router, Switch } from "react-router";
import { Spin } from "antd";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
// import Checkout from "./pages/Checkout/Checkout";
// import Detail from "./pages/Detail/Detail";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUp/SignUp";
// import Profile from "./pages/Profile/Profile";

import { fetchInfouserAction } from "./redux/actions/QuanLyNguoiDung";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTempalte";
import { HomeTempalte } from "./templates/HomeTemplate/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import { TOKEN } from "./util/settings/config";

export const history = createBrowserHistory();

const Home = React.lazy(() => import("./pages/Home/Home.js"));
const Login = React.lazy(() => import("./pages/Login/Login.js"));
const SignUp = React.lazy(() => import("./pages/SignUp/SignUp.js"));
const Checkout = React.lazy(() => import("./pages/Checkout/Checkout.js"));
const Detail = React.lazy(() => import("./pages/Detail/Detail.js"));
const Profile = React.lazy(() => import("./pages/Profile/Profile.js"));

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem(TOKEN);
  useEffect(() => {
    console.log("token", token);
    if (token) {
      dispatch(fetchInfouserAction(token));
    }
  }, [token, dispatch]);
  return (
    <Router history={history}>
      <React.Suspense
        fallback={
          <div className="container absolute top-2/4 left-1/2">
            <Spin tip="Loading..." size="large" />
          </div>
        }
      >
        <Switch>
          <HomeTempalte path="/home" exact Component={Home} />
          <UserTemplate path="/login" exact Component={Login} />
          <UserTemplate path="/profile" exact Component={Profile} />
          <UserTemplate path="/signup" exact Component={SignUp} />
          <CheckoutTemplate path="/checkout/:idLC" exact Component={Checkout} />
          <HomeTempalte path="/detail/:idMovie" exact Component={Detail} />
          <HomeTempalte path="/" Component={Home} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
