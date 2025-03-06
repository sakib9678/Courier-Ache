import Navber from "./Navber";
import { Outlet } from "react-router-dom";
import Fotter from "./Fotter";

const Home = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Fotter />
    </>
  );
};

export default Home;
