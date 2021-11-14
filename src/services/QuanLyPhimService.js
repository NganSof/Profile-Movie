import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimService extends baseService {
  LayDSBanner = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };
  LayDSPhim = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
  layTTPhim = (maP) => {
    return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maP}`);
  };
  LayPhim = (tenP) => {
    return this.get(
      `api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenP}`
    );
  };
}

export const quanLyPhim = new QuanLyPhimService();
