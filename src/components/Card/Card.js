import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import moment from "moment";
import "./Card.css";

const Cards = (props) => {
  const itemFilm = props.item;

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
          <button className="sha font-mono shadow-lg p-2 text-black rounded-full text-xl hover:shadow-inner">
            <NavLink to={`/detail/${itemFilm.maPhim}`} className="text-red-600">
              Show
            </NavLink>
          </button>
          <h2
            title={itemFilm.tenPhim}
            className="cursor-default mb-0 font-bold text-right"
          >
            {itemFilm.tenPhim.length > 15
              ? itemFilm.tenPhim.slice(0, 15) + "..."
              : itemFilm.tenPhim}
          </h2>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
