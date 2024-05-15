import "./App.css";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header/header";
import FooterComponent from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="App">
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
        
      </div>
    </>
  );
}

export default App;
