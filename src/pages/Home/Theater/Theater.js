import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoTheaterCluster } from "../../../redux/actions/QuanLyRap";

import { Tabs } from "antd";
import Tab from "../../../components/Tab/Tab";
const { TabPane } = Tabs;

const Theater = (props) => {
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const dispatch = useDispatch();
  const { cluster, systemClus } = useSelector((state) => {
    return state.QuanLyRap;
  });

  useEffect(() => {
    dispatch(getInfoTheaterCluster());
  }, [dispatch]);

  const { tabPosition } = state;

  const renderTheater = () => {
    return cluster?.map((item, index) => {
      return (
        <TabPane
          tab={<img src={item.logo} alt="logo" className="w-14 h-14" />}
          key={index}
        >
          <Tab maHTR={item.maHeThongRap} />
        </TabPane>
      );
    });
  };
  return (
    <div
      id="dsCumRap"
      className="ml-24 my-10 py-10 px-14 bg-red-200 rounded-t-2xl border-t-4 border-red-500 xl:ml-1 md:w-full md:mr-2 sm:-ml-9 sm:w-96"
    >
      <h1 className=" py-6 uppercase font-mono text-4xl">Hệ thống cụm rạp</h1>
      <Tabs tabPosition={tabPosition} className="sm:mr-2 lg:mr-8 md:mr-5">
        {renderTheater()}
      </Tabs>
    </div>
  );
};

export default Theater;
