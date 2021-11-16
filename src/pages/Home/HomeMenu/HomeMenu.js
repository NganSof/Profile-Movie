import React from "react";
import Slider from "react-slick";
import { Tabs } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Cards from "../../../components/Card/Card";
import { useMediaQuery } from "react-responsive";
import sty from "./HomeMenu.css";

const { TabPane } = Tabs;

function SampleNextArrow(props) {
  const ScreenMD = useMediaQuery({ query: "(min-width: 769px)" });
  const { className, style, onClick } = props;

  return (
    <>
      {ScreenMD ? (
        <RightOutlined
          className={`${className} `}
          style={{
            ...style,
            fontSize: 30,
            paddingRight: 20,
            color: "red",
            zIndex: 50,
          }}
          onClick={onClick}
        />
      ) : (
        <RightOutlined
          className={`${className} `}
          style={{
            ...style,
            fontSize: 30,
            paddingRight: 69,
            display: "none",
            color: "red",
            zIndex: 50,
          }}
          onClick={onClick}
        />
      )}
    </>
  );
}
function SamplePrevArrow(props) {
  const ScreenMD = useMediaQuery({ query: "(min-width: 769px)" });
  const { className, style, onClick } = props;
  return (
    <>
      {ScreenMD ? (
        <LeftOutlined
          className={`${className} `}
          style={{
            ...style,
            color: "red",
            zIndex: 50,
            paddingRight: 20,
            fontSize: 30,
          }}
          onClick={onClick}
        />
      ) : (
        <LeftOutlined
          className={`${className} `}
          style={{
            ...style,
            color: "red",
            zIndex: 50,
            paddingRight: 69,
            fontSize: 30,
          }}
          onClick={onClick}
        />
      )}
    </>
  );
}
const HomeMenu = (prop) => {
  const list = prop.itemFilm;
  const arrDC = list.filter((film) => film.dangChieu === true);
  const arrSC = list.filter((film) => film.sapChieu === true);

  const settings = {
    rows: 2,
    infinite: false,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: "50px",
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="m-20 w-auto md:m-0 md:max-w-none xl:mx-0 xl:my-auto sm:w-96 md:w-full"
      style={{
        maxWidth: 950,
        margin: "0 auto",
      }}
    >
      <Tabs defaultActiveKey="1" className="z-10" id="dsPhim">
        <TabPane tab="Đang Chiếu" key="1">
          <Slider {...settings} className="z-30">
            {arrDC?.slice(0, 12).map((item, index) => {
              return (
                <div className="mt-7">
                  <Cards item={item} key={index} />
                </div>
              );
            })}
          </Slider>
        </TabPane>
        <TabPane tab="Sắp Chiếu" key="2">
          <Slider {...settings}>
            {arrSC?.slice(0, 10).map((item, index) => {
              return (
                <div className="mt-7">
                  <Cards item={item} key={index} />
                </div>
              );
            })}
          </Slider>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default HomeMenu;
