import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import signin from "../../assets/56-document-outline.webp";
import find from "../../assets/19-magnifier-zoom-search-outline (2).webp";
import tc from "../../assets/1103-confetti-outline.webp";
import fill from "../../assets/966-privacy-policy-outline.webp";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Button } from "antd";
import { fetchSignIn } from "../../redux/actions/QuanLyNguoiDung";

const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .min(5, "Mininum 5 characters")
    .required("User is required"),
  matKhau: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/,
      "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number"
    )
    .required("Password is required!"),
});

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [icona, setIcona] = useState(true);
  const [iconb, setIconb] = useState(true);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(
      fetchSignIn(formik.values, () => {
        setIcona(!icona);
        history.push("/");
        window.location.reload();
      })
    );
  };

  const handleSetDefault = () => {
    setIconb(!iconb);
    const defaultplayer = {
      taiKhoan: "kim2112",
      matKhau: "Kim2112",
    };
    formik.setValues(defaultplayer);
  };

  return (
    <div className="bg-red-300" style={{ minHeight: "100vh" }}>
      <div className="pt-8 ml-44">
        {!icona && (
          <Alert
            style={{
              borderRadius: 50,
              width: 350,
            }}
            message="Đăng nhập thành công"
            type="success"
            showIcon
            action={<Button size="small" type="text"></Button>}
            closable
          />
        )}
      </div>
      <div className="ml-44">
        {!iconb && (
          <Alert
            style={{
              borderRadius: 50,
              width: 350,
            }}
            message="Thông tin cũ chính xác"
            type="success"
            showIcon
            action={<Button size="small" type="text"></Button>}
            closable
          />
        )}
      </div>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-1/3 h-1/3 sm:hidden md:inline-flex">
          <img src={signin} alt="signin" />
        </div>
        <div>
          <div className="max-w-md w-full text-center ml-32 sm:ml-0 md:ml-32">
            <h2
              className="mt-6 text-3xl font-bold italic uppercase"
              style={{ textShadow: "0px 10px 10px  #FECACA", color: "#FFFFFF" }}
            >
              Mời Bạn Đăng Nhập
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px sm:mx-1 md:mx-0">
              <div className="mb-7">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.taiKhoan}
                  name="taiKhoan"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-4 border-yellow-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:shadow-inner focus:border-yellow-600 focus:z-10 sm:text-sm"
                  placeholder="Tên tài khoản"
                />
                {formik.touched.taiKhoan && (
                  <p style={{ color: "red" }}>{formik.errors.taiKhoan}</p>
                )}
              </div>
              <div>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.matKhau}
                  name="matKhau"
                  type="password"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-4 border-yellow-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:shadow-inner focus:border-yellow-600 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                {formik.touched.matKhau && (
                  <p style={{ color: "red" }}>{formik.errors.matKhau}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-evenly sm:flex-wrap md:justify-evenly">
              <div className="text-red-300 ">
                <img src={find} alt="find" className="w-24 h-24" />
              </div>
              <div
                onClick={() => history.push("/signup")}
                className="font-medium text-lg p-5 bg-red-300 rounded-2xl text-white tracking-wider shadow-2xl hover:shadow-inner hover:text-red-300 hover:bg-white uppercase "
              >
                đăng ký tài khoản mới
              </div>
            </div>
            <div
              onClick={() => history.goBack()}
              className="md:hidden sm:block font-medium text-lg text-center bg-red-300 rounded-2xl text-white tracking-wider shadow-2xl hover:shadow-inner hover:text-red-300 hover:bg-white uppercase"
            >
              {`<<< quay lại`}
            </div>

            <div className="flex items-center justify-around">
              <div
                onClick={handleSubmit}
                className="w-full h-32 mr-5 items-center cursor-pointer flex justify-around border-blue-800 border-b-2 rounded-b-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-5 md:ml-0"
              >
                <div className="w-64 ">
                  <img src={tc} alt="thành công" />
                </div>
                {icona && (
                  <button
                    type="submit"
                    className="group relative w-full text-lg py-2 px-4 border border-transparent font-medium rounded-2xl text-white tracking-wider"
                  >
                    Sign in
                  </button>
                )}
              </div>
              <div
                onClick={handleSetDefault}
                className="w-full h-32 items-center cursor-pointer flex justify-around border-blue-800 border-b-2 rounded-b-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 sm:hidden md:inline-flex"
              >
                <div className="w-64">
                  <img src={fill} alt="fill form" />
                </div>
                {iconb && (
                  <button
                    type="button"
                    className="group relative w-full text-lg py-2 px-4 border border-transparent font-medium rounded-2xl text-white tracking-wider"
                  >
                    Fill Form
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
