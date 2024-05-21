import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/home";
import { path } from "./utils/constanst"



const Layout = () => {

  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<App />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </>
  );
};

export default Layout;
