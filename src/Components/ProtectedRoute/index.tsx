import { useState} from "react";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
  (async () => {
    // Authentication logic here...
    setIsAuthenticated(true);
  })();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated === null) {
          return "loading..";
        } else if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
