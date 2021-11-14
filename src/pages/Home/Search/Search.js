import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { getSearchFilm } from "../../../redux/actions/Carousel";

// const schema = yup.object().shape({
//   tenPhim: yup.string().required("Name is required"),
// });

const Search = (props) => {
  const dispatch = useDispatch();
  const { searchFilm } = useSelector((state) => {
    return state.QuanLyPhim;
  });
  const [value, setValue] = React.useState("");
  // const formik = useFormik({
  //   initialValues: {
  //     tenPhim: "",
  //   },
  //   validationSchema: schema,
  //   validateOnMount: true,
  // });

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (!formik.isValid) return;
  //   dispatch(getSearchFilm(formik.values.tenPhim));
  // };
  useEffect(() => {
    if (value) {
      const timer = setTimeout(() => {
        dispatch(getSearchFilm(value));
      }, 500);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="p-8 mr-32 md:pr-20 xl:mr-0 xl:pl-10" id="SearchFilm">
      <div className="bg-white flex items-center rounded-full shadow-xl w-full xl:text-lg xl:font-bold xl:w-1/2 md:ml-50 md:w-2/3">
        <input
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.tenPhim}
          name="tenPhim"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-l-full w-full py-4 px-6 text-black text-md italic leading-tight focus:outline-none "
          id="search"
          type="search"
          placeholder="Phim bạn tìm"
        />
        <div className="p-4">
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
            // onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="my-7">
        {value &&
          searchFilm?.slice(0, 9).map((item, index) => {
            return (
              <div className="text-lg w-96 pl-10 ml-6 py-2 border-b-2 border-solid border-red-900 mb-3 rounded-lg hover:shadow-inner">
                <NavLink
                  key={index}
                  className=" cursor-pointer tracking-wider list-none"
                  to={`/detail/${item.maPhim}`}
                >
                  <div>{item.tenPhim}</div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
