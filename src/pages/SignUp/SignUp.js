import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Alert, Button } from "antd";
import { useFormik } from "formik";
import tc from "../../assets/1103-confetti-outline.webp";
import signup from "../../assets/955-demand-outline.webp";
import * as yup from "yup";
import { fetchSignUp } from "../../redux/actions/QuanLyNguoiDung";

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
  email: yup.string().email().required("Email is required"),
  soDT: yup.string().max(10, "Maximum 5 characters"),
  hoTen: yup
    .string()
    .min(5, "Mininum 5 characters")
    .required("User is required"),
});

const SignUp = (props) => {
  const [icona, setIcona] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const page = () => {
    setIcona(!icona);
    history.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(
      fetchSignUp(formik.values, () => {
        page();
      })
    );
  };

  return (
    <div className="bg-red-300" style={{ minHeight: "100vh" }}>
      <div className="pt-4 ml-32">
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

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-1/2 h-1/2 mb-10 sm:hidden md:inline-flex">
          <img src={signup} alt="signin" />
        </div>
        <div>
          <div className="max-w-md w-full text-center ">
            <h2
              className=" text-3xl font-bold italic uppercase"
              style={{ textShadow: "0px 10px 10px  #FECACA", color: "#FFFFFF" }}
            >
              mời bạn đăng ký
            </h2>
          </div>
          <div
            onClick={() => history.push("/")}
            className="md:hidden sm:block font-medium text-lg text-center bg-red-300 rounded-2xl text-white tracking-wider shadow-2xl hover:shadow-inner hover:text-red-300 hover:bg-white uppercase"
          >
            về trang chủ
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
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
              <div style={{ marginBottom: 25 }}>
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
              <div style={{ marginBottom: 25 }}>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                  type="email"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-4 border-yellow-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:shadow-inner focus:border-yellow-600 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
                {formik.touched.email && (
                  <p style={{ color: "red" }}>{formik.errors.email}</p>
                )}
              </div>
              <div style={{ marginBottom: 25 }}>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.soDT}
                  name="soDT"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-4 border-yellow-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:shadow-inner focus:border-yellow-600 focus:z-10 sm:text-sm"
                  placeholder="Số điện thoại"
                />
                {formik.touched.soDT && (
                  <p style={{ color: "red" }}>{formik.errors.soDT}</p>
                )}
              </div>
              <div style={{ marginBottom: 25 }}>
                <input
                  readOnly
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.maNhom}
                  name="maNhom"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-4 border-yellow-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:shadow-inner focus:border-yellow-600 focus:z-10 sm:text-sm"
                />

                {formik.touched.maNhom && (
                  <p style={{ color: "red" }}>{formik.errors.maNhom}</p>
                )}
              </div>
              <div style={{ marginBottom: 25 }}>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.hoTen}
                  name="hoTen"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border-b-4 border-yellow-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:shadow-inner focus:border-yellow-600 focus:z-10 sm:text-sm"
                  placeholder="Họ tên"
                />
                {formik.touched.hoTen && (
                  <p style={{ color: "red" }}>{formik.errors.hoTen}</p>
                )}
              </div>
            </div>
            <div>
              <div
                onClick={handleSubmit}
                className="w-full h-20 mr-5 items-center cursor-pointer flex justify-around shadow-2xl bg-red-300 rounded-2xl text-white hover:shadow-inner hover:text-red-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <div className="w-64 ">
                  <img src={tc} alt="thành công" />
                </div>
                {icona && (
                  <button
                    type="submit"
                    className="group relative w-full text-2xl border border-transparent font-extrabold uppercase tracking-widest"
                  >
                    Sign Up
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
export default SignUp;
