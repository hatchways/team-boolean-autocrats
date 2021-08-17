import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/useAuthContext';

export default function ProtectedRoute({ component: Component, ...rest }): JSX.Element {
  const { loggedInUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loggedInUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
