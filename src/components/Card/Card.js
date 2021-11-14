import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getInfoFilm } from "../../redux/actions/Carousel";
import { Card } from "antd";
import moment from "moment";

const Cards = (props) => {
  const itemFilm = props.item;
  const dispatch = useDispatch();

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          className="mx-auto"
          style={{ width: 250, height: 300 }}
          alt="example"
          src={itemFilm.hinhAnh}
        />
      }
    >
      <div>
        <div className="text-black mb-2 cursor-default">
          Ngày ra rạp :<br />
          {moment(itemFilm.ngayKhoiChieu).format("hh:mm A DD-MM-yyyy")}
        </div>
        <div className="flex justify-between items-center align-items-center">
          <button className="font-mono shadow-lg p-2 text-black rounded-full text-xl hover:shadow-inner">
            <NavLink to={`/detail/${itemFilm.maPhim}`} className="text-red-600">
              Show
            </NavLink>
          </button>
          <h2 title={itemFilm.tenPhim} className="cursor-default mb-0">
            {itemFilm.tenPhim?.slice(0, 15) + " .."}
          </h2>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
