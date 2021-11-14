import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import dv from "../../assets/1876-cinema-outline.webp";
import { getCheckOut } from "../../redux/actions/QuanLyDatVe";
import CheckoutItem from "./CheckoutItem";
import InfoCheckOut from "./InfoCheckOut/InfoCheckOut";

const Checkout = (props) => {
  const history = useHistory();
  const { idLC } = useParams();
  // const idLC = props.match.params.idLC;
  const dispatch = useDispatch();
  const { checkOut } = useSelector((state) => state.QuanLyDatVe);
  const { danhSachGhe } = checkOut;
  const [value, setValue] = useState([]);

  useEffect(() => {
    dispatch(getCheckOut(idLC));
  }, [idLC, dispatch]);

  const handleBooking = (item) => {
    const find = value.findIndex((index) => {
      return index.tenGhe === item.tenGhe;
    });
    if (find === -1) {
      setValue([...value, item]);
    } else {
      value.splice(find, 1);
      setValue([...value]);
    }
  };
  console.log("value", value);

  return (
    <div className="container">
      <div className="grid grid-cols-12">
        <div className="col-span-8 col-start-1">
          <div
            title="Quay Về"
            className="mb-3"
            onClick={() => history.goBack()}
          >
            <img
              src={dv}
              alt="Đặt vé"
              className="w-full h-80 text-center cursor-pointer"
            />
          </div>
          <div>
            <div className="pr-3">
              {danhSachGhe?.map((item, ind) => {
                return (
                  <CheckoutItem
                    key={ind}
                    item={item}
                    handleBooking={handleBooking}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-4 font-sans">
          <InfoCheckOut checkOut={checkOut} value={value} id={idLC} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
