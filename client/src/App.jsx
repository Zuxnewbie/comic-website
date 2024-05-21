import "./App.css";
import HeaderComponent from "./components/header/header";
import FooterComponent from "./components/footer/footer";
import { Outlet } from "react-router-dom";
import PopupLoginComponent from "./components/popup/popup";

function App() {
  return (
    <>
      <div className="App">
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
        <PopupLoginComponent />
      </div>
    </>
  );
}

export default App;
