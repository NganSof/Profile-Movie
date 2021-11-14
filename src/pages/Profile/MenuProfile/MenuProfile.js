import React from "react";
import home from "../../../assets/63-home-outline.webp";
import user from "../../../assets/268-avatar-man-outline.webp";
import { NavLink } from "react-router-dom";
import { REMOVE_USER } from "../../../redux/types/Type";
import { CreateAction } from "../../../redux/types/CreateAction";
import { useDispatch } from "react-redux";

const MenuProfile = (props) => {
  const dispatch = useDispatch();
  const { infoUser } = props;
  console.log("info User", infoUser);

  return (
    <div className="bg-green-700 pb-10 h-40 flex justify-around shadow-2xl rounded-b-2xl">
      <NavLink to="/home" title="Home">
        <img src={home} alt="home" className="w-36 h-36" />
      </NavLink>
      <div>
        <NavLink
          to="/login"
          title="Log Out"
          onClick={() => {
            localStorage.removeItem("tokenUser");
            dispatch(CreateAction(REMOVE_USER));
          }}
        >
          <img src={user} alt="home" className="w-40 h-40" />
        </NavLink>
      </div>
    </div>
  );
};

export default MenuProfile;
