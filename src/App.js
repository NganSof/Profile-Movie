import "antd/dist/antd.css";
import { createBrowserHistory } from "history";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Router, Switch } from "react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Checkout from "./pages/Checkout/Checkout";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Register from "./pages/Register/Register";
import { fetchInfouserAction } from "./redux/actions/QuanLyNguoiDung";
import CheckoutTemplate from "./templates/CheckoutTemplate/CheckoutTempalte";
import { HomeTempalte } from "./templates/HomeTemplate/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import { TOKEN } from "./util/settings/config";
import Profile from "./pages/Profile/Profile";

const CheckoutTemplateLazy = lazy(() =>
  import("./templates/CheckoutTemplate/CheckoutTempalte")
);
export const history = createBrowserHistory();

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
      <Switch>
        <HomeTempalte path="/home" exact Component={Home} />
        <UserTemplate path="/login" exact Component={Login} />
        <UserTemplate path="/profile" exact Component={Profile} />
        <UserTemplate path="/signup" exact Component={SignUp} />
        <Route path="/register" exact Component={Register} />
        <CheckoutTemplate path="/checkout/:idLC" exact Component={Checkout} />
        <HomeTempalte path="/detail/:idMovie" exact Component={Detail} />
        <HomeTempalte path="/" Component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
