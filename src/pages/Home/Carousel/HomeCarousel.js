import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBaner } from "../../../redux/actions/Carousel";
import "./Carousel.css";

const HomeCarousel = (props) => {
  const dispatch = useDispatch();
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  useEffect(() => {
    dispatch(getBaner());
  }, [dispatch]);

  const contentStyle = {
    height: "600px",
    lineHeight: "160px",
    textAlign: "center",
    background: "#F6D989",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Carousel autoplay effect="fade">
      {arrImg?.map((item, index) => {
        return (
          <div key={index}>
            <div
              style={{
                ...contentStyle,
                backgroundImage: `url(${item.hinhAnh})`,
                height: "750",
              }}
            >
              <img
                src={item.hinhAnh}
                alt=""
                className="w-full h-full opacity-0"
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
