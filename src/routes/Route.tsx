import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteCustomProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteCustom: React.FC<RouteCustomProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/signin' : '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteCustom;
