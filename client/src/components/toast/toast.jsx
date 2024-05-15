import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ToastComponent = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      
      // transition:Bounce
    />
  );
};

export default ToastComponent;
