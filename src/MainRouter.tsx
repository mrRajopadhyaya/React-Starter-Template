import { Route, Switch } from "react-router-dom";
import AppLayout from "./Components/AppLayout";


const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={AppLayout} />
    </Switch>
  );
};
export default MainRouter;
