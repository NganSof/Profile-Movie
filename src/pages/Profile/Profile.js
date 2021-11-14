import React, { useState } from "react";
import { useSelector } from "react-redux";
import Info from "../../components/Info/Info";
import InfoUser from "../../components/InfoUser/InfoUser";
import MenuProfile from "./MenuProfile/MenuProfile";

const Profile = (props) => {
  const { infoUser } = useSelector((state) => state.QuanLyNguoiDung);

  return (
    <div>
      <div
        className="grid grid-cols-12 bg-red-900"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-span-4 col-start-1 mt-10 text-center shadow-xl border-r-4 border-red-900">
          <Info infoUser={infoUser} />
        </div>
        <div className="col-span-8">
          <MenuProfile infoUser={infoUser} />
          <InfoUser infoUser={infoUser} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
