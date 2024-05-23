import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/home";
import { path } from "./utils/constanst"
import NewPage from "./pages/new/new";



const Layout = () => {

  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<App />}>
          <Route index element={<NewPage />} />
          <Route path="new" element={<NewPage />} />
          <Route path={path.HOME__PAGE} element={<NewPage />} />
        </Route>

      </Routes>
    </>
  );
};

export default Layout;
