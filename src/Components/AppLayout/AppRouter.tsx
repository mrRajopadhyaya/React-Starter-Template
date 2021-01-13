import { Route } from "react-router-dom";
import About from "../../Routes/About";
import Home from "../../Routes/Home";

const AppRouter = () => {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </>
  );
};

export default AppRouter;
