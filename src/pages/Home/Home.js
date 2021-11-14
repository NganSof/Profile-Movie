import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeCarousel from "../Home/Carousel/HomeCarousel";
import HomeMenu from "./HomeMenu/HomeMenu";
import Theater from "./Theater/Theater";
import { getListFilm } from "../../redux/actions/Carousel";
import Search from "./Search/Search";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListFilm());
  }, [dispatch]);

  const { arrFilm } = useSelector((state) => {
    return state.QuanLyPhim;
  });

  return (
    <div>
      <HomeCarousel />
      <Search />
      <div
        className="mt-5 py-7 border-t-4 border-b-4 border-red-900 rounded-2xl shadow-xl "
        style={{ maxWidth: 1280, margin: "auto" }}
      >
        <HomeMenu itemFilm={arrFilm} />
      </div>
      <div className="my-16 container">
        <Theater />
      </div>
    </div>
  );
};

export default Home;
