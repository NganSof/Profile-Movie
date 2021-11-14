import React, { useState } from "react";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CreateAction } from "../../../../redux/types/CreateAction";
import { REMOVE_USER } from "../../../../redux/types/Type";
import { scroller } from "react-scroll";

const Drawe = (props) => {
  const { infoUser } = props;
  const token = localStorage.getItem("tokenUser");
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleScrollViewList = () => {
    scroller.scrollTo("dsPhim", {
      duration: 1500,
      smooth: true,
      offset: -150,
    });
  };
  const handleScrollViewCinema = () => {
    scroller.scrollTo("dsCumRap", {
      duration: 1500,
      smooth: true,
      offset: -150,
    });
  };
  const handleScrollViewFilm = () => {
    scroller.scrollTo("SearchFilm", {
      duration: 1500,
      smooth: true,
      offset: -150,
    });
  };
  const isMobile = true;
  return (
    <>
      <button type="primary" onClick={showDrawer}>
        <svg
          classname="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      </button>
      <Drawer
        width={isMobile ? "80%" : "35%"}
        title="Movie App"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <ul className="items-stretch space-x-3 xl:flex text-left">
          <li className="flex pl-2 h-16">
            <span
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-xl text-yellow-300 hover:text-red-600"
              onClick={handleScrollViewList}
            >
              Danh sách phim
            </span>
          </li>
          <li className="flex h-16">
            <span
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-xl text-yellow-300 hover:text-red-600"
              onClick={handleScrollViewCinema}
            >
              Cụm rạp
            </span>
          </li>
          <li className="flex h-16">
            <span
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-xl text-yellow-300 hover:text-red-600"
              onClick={handleScrollViewFilm}
            >
              Tìm phim mới
            </span>
          </li>
          <li className="inline h-16 mr-2">
            {token ? (
              <div>
                <NavLink
                  to="/profile"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-yellow-300 text-xl hover:text-red-600"
                >
                  Thông tin {infoUser.taiKhoan}
                </NavLink>
                <NavLink
                  to="/"
                  onClick={() => {
                    localStorage.removeItem("tokenUser");
                    dispatch(CreateAction(REMOVE_USER));
                  }}
                  className="flex items-center px-4 mt-10 -mb-1 border-b-2 border-transparent text-yellow-300 text-xl hover:text-red-600"
                >
                  Đăng xuất
                </NavLink>
              </div>
            ) : (
              <div className="flex -space-x-4 px-3">
                <img
                  alt=""
                  className="w-12 h-12 border rounded-full cursor-pointer"
                  src="https://tix.vn/app/assets/img/avatar.png"
                />
                <NavLink
                  to="/login"
                  className="w-80 pl-8 mt-2 -mb-1 border-b-2 border-transparent text-yellow-300 text-xl hover:text-red-600"
                >
                  Đăng nhập
                </NavLink>
              </div>
            )}
          </li>
        </ul>
      </Drawer>
    </>
  );
};
export default Drawe;
