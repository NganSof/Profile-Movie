import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoSystemCluster } from "../../redux/actions/QuanLyRap";
import { Tabs, Table, Modal } from "antd";
import { useMediaQuery } from "react-responsive";
import "./Tab.css";
const { TabPane } = Tabs;

const Tab = (props) => {
  const scren = useMediaQuery({ query: "(min-width: 769px)" });
  const maHTR = props.maHTR;
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "MÃ RẠP",
      dataIndex: "maRap",
    },
    {
      title: "TÊN RẠP",
      dataIndex: "tenRap",
    },
  ];
  const { tabPosition } = state;
  const dispatch = useDispatch();
  const { infoSystem } = useSelector((state) => {
    return state.QuanLyRap;
  });

  useEffect(() => {
    dispatch(getInfoSystemCluster(maHTR));
  }, [dispatch]);

  const renderInfoSystem = () => {
    return infoSystem?.slice(0, 3).map((info, index) => {
      return (
        <TabPane
          tab={
            <button
              onClick={() => setVisible(true)}
              className="text-lg p-5 text-yellow-900 bg-yellow-200 border-2 border-green-700 rounded-md md:w-96 md:overflow-hidden md:h-auto sm:w-44 sm:overflow-auto sm:-ml-2 md:ml-0"
            >
              {info.tenCumRap}
            </button>
          }
          key={index}
        >
          <div className="grid grid-cols-2 lg:grid-cols-none sm:inline-block md:grid">
            {info.danhSachRap?.map((item, index) => {
              return (
                <>
                  {scren ? (
                    <div
                      key={index}
                      className="flex mr-4 px-5 pt-3 pl-14 text-base italic justify-start items-center shadow-lg border-b-2 border-solid border-pink-600 mb-3 cursor-not-allowed md:pl-20 lg:flow-root lg:w-32 sm:ml-2 sm:pl-1"
                    >
                      <p className="mr-2">Mã rạp : {item.maRap}</p>
                      <p>Tên rạp : {item.tenRap}</p>
                    </div>
                  ) : (
                    <Modal
                      title="Danh Sách Hệ Thống Cụm Rạp"
                      centered
                      visible={visible}
                      onOk={() => setVisible(false)}
                      onCancel={() => setVisible(false)}
                      width={1000}
                    >
                      <Table
                        style={{ textAlign: "center" }}
                        columns={columns}
                        dataSource={info?.danhSachRap}
                        scroll={{ y: 240 }}
                        pagination={false}
                      />
                    </Modal>
                  )}
                </>
              );
            })}
          </div>
        </TabPane>
      );
    });
  };
  return (
    <Tabs tabPosition={tabPosition} className="sm:flex sm:flex-wrap sm:ml-2">
      {renderInfoSystem()}
    </Tabs>
  );
};

export default Tab;
