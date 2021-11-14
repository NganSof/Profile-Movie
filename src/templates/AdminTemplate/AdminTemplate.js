import { Route } from "react-router";
import { Fragment } from "react";

const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
export default AdminTemplate;
