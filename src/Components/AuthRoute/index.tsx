import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

export const AuthRoute = ({ component: Component, ...rest }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    (async () => {
      // Authentication logic here...
      setIsAuthenticated(true);
    })();
  }, []);
  return (
    <div className="">
      <Route
        {...rest}
        render={(props) => {
          if (isAuthenticated === null) {
            return <div className="loading-spinner">loading...</div>;
          } else if (!isAuthenticated) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    </div>
  );
};
export default AuthRoute;
