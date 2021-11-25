import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import img from "../../../../assets//499-clipboard-film-clap-outline (1).webp";
import { Menu, Dropdown } from "antd";
import Drawe from "./Drawe";
import { CreateAction } from "../../../../redux/types/CreateAction";
import { REMOVE_USER } from "../../../../redux/types/Type";
import { scroller } from "react-scroll";

const Header = (props) => {
  const token = localStorage.getItem("tokenUser");
  const history = useHistory();
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const [visible, setVisible] = useState(false);
  const { infoUser } = useSelector((state) => state.QuanLyNguoiDung);

  const menu = (
    <Menu
      style={{
        marginTop: 5,
        fontSize: 25,
        marginLeft: 40,
      }}
    >
      <Menu.Item key="0" className="hover:text-yellow-500 text-red-700">
        <NavLink to="/profile" className="text-lg italic">
          Thông tin {infoUser.taiKhoan}{" "}
        </NavLink>
      </Menu.Item>

      <Menu.Divider style={{ backgroundColor: "yellowgreen", height: 2 }} />
      <Menu.Item key="1" className="hover:text-yellow-500 text-red-700">
        <NavLink
          to="/"
          onClick={() => {
            localStorage.removeItem("tokenUser");
            dispatch(CreateAction(REMOVE_USER));
          }}
          className="text-lg italic"
        >
          Đăng xuất
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const showDrawer = () => {
    setVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

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

  return (
    <div
      className={
        scroll ? "bg-gray-700 h-24 w-full fixed z-40 " : "bg-transparent"
      }
    >
      <header className="p-4 h-24 w-full z-10 decoration-slice ">
        <div className="container flex justify-between h-16 mx-auto ">
          <div aria-label="Back to homepage" className="flex items-center p-2">
            <NavLink to="/" className="flex p-2">
              <img src={img} alt="hinhAnh" className="w-28 h-28 pb-3" />
            </NavLink>
          </div>
          <ul className="items-stretch text-xl tracking-widest hidden space-x-3 xl:flex md:flex">
            <li className="flex">
              <span
                className="flex items-center cursor-pointer px-4 -mb-1 border-b-2 border-transparent text-xl text-yellow-300 hover:text-red-600"
                onClick={handleScrollViewList}
              >
                Danh sách phim
              </span>
            </li>
            <li className="flex">
              <span
                className="flex items-center cursor-pointer  px-4 -mb-1 border-b-2 border-transparent text-yellow-300 text-xl hover:text-red-600"
                onClick={handleScrollViewCinema}
              >
                Cụm rạp
              </span>
            </li>
            <li className="flex">
              <span
                className="flex items-center cursor-pointer  px-4 -mb-1 border-b-2 border-transparent text-yellow-300 text-xl hover:text-red-600"
                onClick={handleScrollViewFilm}
              >
                Tìm phim mới
              </span>
            </li>
          </ul>
          <div className="hidden xl:flex md:flex">
            <div>
              <div>
                {token ? (
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <div className="flex justify-between items-center">
                      <div className="w-14 h-14 mr-3">
                        <img
                          className="rounded-full border-2 border-green-500"
                          src={
                            infoUser.hinhAnh
                              ? infoUser.hinhAnh
                              : `https://i.pravatar.cc/150?u=${infoUser.hoTen}`
                          }
                          alt="hình Profile"
                        />
                      </div>
                      <div className="ant-dropdown-link text-xl italic text-yellow-300 hover:text-red-600 cursor-pointer">
                        Chào {infoUser.taiKhoan}
                      </div>
                    </div>
                  </Dropdown>
                ) : (
                  <div className="flex -space-x-4 px-3">
                    <img
                      alt=""
                      className="w-12 h-12 border rounded-full dark:bg-coolGray-500 dark:border-coolGray-700 cursor-pointer"
                      src="https://tix.vn/app/assets/img/avatar.png"
                    />
                    <NavLink
                      to="/login"
                      className="flex items-center justify-center ml-3 px-7 -mb-1 border-b-2 border-transparent text-yellow-300 text-xl hover:text-red-600"
                    >
                      Đăng nhập
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="p-4 xl:hidden md:hidden" onClick={showDrawer}>
            <Drawe infoUser={infoUser} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
