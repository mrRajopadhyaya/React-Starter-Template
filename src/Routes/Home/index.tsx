import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      This is home page
      <Link to="/about">
        <Button variant="contained" color="primary">
          about
        </Button>
      </Link>
    </div>
  );
};

export default Home;
