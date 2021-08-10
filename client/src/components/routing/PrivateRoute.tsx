import React, { Fragment, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/useAuthContext';

const PrivateRoute: React.FunctionComponent<any> = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { loggedInUser } = authContext;
  return (
    <Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (!loggedInUser) {
            return <Redirect to="/login" />;
          } else {
            return <Component {...props} />;
          }
        }}
      />
    </Fragment>
  );
};

export default PrivateRoute;
