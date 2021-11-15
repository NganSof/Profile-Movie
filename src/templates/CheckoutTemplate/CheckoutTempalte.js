import { Route, Redirect } from "react-router";
import { Fragment } from "react";
import { TOKEN } from "../../util/settings/config";

const CheckoutTemplate = (props) => {
  const { Component, ...restProps } = props;
  if (!localStorage.getItem(TOKEN)) {
    return <Redirect to="/login" />;
  }

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
export default CheckoutTemplate;
