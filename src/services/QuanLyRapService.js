import { baseService } from "./baseServices";

class QuanLyRapService extends baseService {
  getInfoTheaterCluster = () => {
    return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
  };

  getInfoSystemCluster = (value) => {
    return this.get(
      `api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`
    );
  };
  getInfoID = (value) => {
    return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value}`);
  };
}
export const quanLyRap = new QuanLyRapService();
