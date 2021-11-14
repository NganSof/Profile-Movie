import axios from "axios";
import { DOMAIN, TOKEN, TOKENCYBER } from "../util/settings/config";

const token = localStorage.getItem(TOKEN);
export class baseService {
  get = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: { TokenCybersoft: `${TOKENCYBER}` },
    });
  };
  post = (url, val) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: val,
      headers: {
        TokenCybersoft: `${TOKENCYBER}`,
        Authorization: `Bearer ${token}`,
      },
    });
  };
  put = (url, val) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: val,
      headers: {
        TokenCybersoft: `${TOKENCYBER}`,
        Authorization: `Bearer ${token}`,
      },
    });
  };
  delete = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: `${TOKENCYBER}`,
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
