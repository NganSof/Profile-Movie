import React, { Fragment, useState } from "react";
import { Modal, Button, Table } from "antd";

const ProfileBooking = (props) => {
  const { danhSachGhe } = props;
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "HỆ THỐNG RẠP",
      dataIndex: "tenHeThongRap",
    },
    {
      title: "TÊN CỤM RẠP",
      dataIndex: "tenCumRap",
    },
    {
      title: "MÃ CỤM RẠP",
      dataIndex: "maRap",
    },
    {
      title: "SỐ GHẾ",
      dataIndex: "tenGhe",
    },
  ];
  // const dsGheDat = list?.map((item) => item.danhSachGhe).flat();

  return (
    <Fragment>
      <Button
        style={{ backgroundColor: "transparent", border: "none", fontSize: 15 }}
        onClick={() => setVisible(true)}
      >
        Xem chi tiết
      </Button>
      <Modal
        title="Thông Tin Vé Đã Đặt"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <Table
          style={{ textAlign: "center" }}
          columns={columns}
          dataSource={danhSachGhe}
          scroll={{ y: 240 }}
          pagination={false}
        />
      </Modal>
    </Fragment>
  );
};

export default ProfileBooking;
