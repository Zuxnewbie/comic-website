import "./popup.scss";
import { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import ToastComponent from "../toast/toast";
// import { apiRegister } from "../../services/auth";
import * as actions from "../../store/actions"
import { useDispatch } from "react-redux"
import {
  validateName,
  validateEmail,
  validatePassword,
} from "../../utils/validate"; // Adjust the import path as needed
import PropTypes from "prop-types";



const PopupLoginComponent = ({
  onClose,
  display = "",
  iniRegister = false,
}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(iniRegister);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    setIsRegister(iniRegister);
  }, [iniRegister]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value) ? "" : "Invalid email format");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      validatePassword(e.target.value)
        ? ""
        : "Password must be at least 6 characters long"
    );
  };

  const handleEmailRegisterChange = (e) => {
    setEmailRegister(e.target.value);
    setEmailError(validateEmail(e.target.value) ? "" : "Invalid email format");
  };

  const handlePasswordRegisterChange = (e) => {
    setPasswordRegister(e.target.value);
    setPasswordError(
      validatePassword(e.target.value)
        ? ""
        : "Password must be at least 6 characters long"
    );
  };

  const handleNameRegisterChange = (e) => {
    setName(e.target.value);
    setNameError(
      validateName(e.target.value)
        ? ""
        : "Name must be 1-10 characters long and contain only letters"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(toast.success("API REGISTER SUCCESS"));

    if (isRegister) {
      if (!validateName(name)) {
        setNameError(
          "Name must be 1-10 characters long and contain only letters"
        );
      }
      if (!validateEmail(emailRegister)) {
        setEmailError("Invalid email format");
      }
      if (!validatePassword(passwordRegister)) {
        setPasswordError("Password must be at least 6 characters long");
      }
      if (!nameError && !emailError && !passwordError) {
        try {
          // const response = await apiRegister({
          //   name: name,
          //   email: emailRegister,
          //   password: passwordRegister,
          // });
          // console.log({
          //   name: name,
          //   email: emailRegister,
          //   password: passwordRegister,
          // });
          dispatch(actions.register({
            name: name,
            email: emailRegister,
            password: passwordRegister,
          }))
          // console.log(response);

          toast.success("API REGISTER SUCCESS");
          // Handle successful registration (e.g., close popup, show success message)
        } catch (error) {
          toast.error("API REGISTER error");

          console.error(error);
          // Handle registration error (e.g., show error message)
        }
      }
    } else {
      // Handle login
    }
  };

  return (
    <>
      <div className={`popup login ${display}`}>
        <div className="popup_content popup_center">
          <form onSubmit={handleSubmit}>
            <h2>{isRegister ? "Đăng ký" : "Đăng nhập"}</h2>
            <ul className="module_login">
              {isRegister ? (
                <>
                  <li>
                    <p>Name</p>
                    <input
                      type="text"
                      required
                      maxLength="150"
                      value={name}
                      onChange={handleNameRegisterChange}
                    />
                    <small>{nameError}</small>
                  </li>
                  <li>
                    <p>Email</p>
                    <input
                      type="email"
                      required
                      maxLength="150"
                      value={emailRegister}
                      onChange={handleEmailRegisterChange}
                    />
                    <small>{emailError}</small>
                  </li>
                  <li>
                    <p>Mật khẩu:</p>
                    <input
                      type="password"
                      value={passwordRegister}
                      onChange={handlePasswordRegisterChange}
                    />
                    <small>{passwordError}</small>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <p>Email</p>
                    <input
                      type="email"
                      maxLength="150"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <small>{emailError}</small>
                  </li>
                  <li>
                    <p>Mật khẩu:</p>
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <small>{passwordError}</small>
                  </li>
                </>
              )}
            </ul>
            <div className="button-row">
              <div className="login_redirect">
                {isRegister ? (
                  <p>
                    <span
                      className="module_login"
                      onClick={() => setIsRegister(false)}
                    >
                      Đăng nhập ngay
                    </span>
                  </p>
                ) : (
                  <p>
                    <span
                      className="module_login"
                      onClick={() => setIsRegister(true)}
                    >
                      Tạo tài khoản mới
                    </span>
                  </p>
                )}
              </div>
              <div className="yes_no">
                {isRegister ? (
                  <>
                    <button type="submit" className="yes">
                      Đăng ký
                    </button>
                  </>
                ) : (
                  <>
                    <button type="submit" className="yes">
                      Đăng nhập
                    </button>
                  </>
                )}
                <button type="button" className="no" onClick={onClose}>
                  Hủy
                </button>
              </div>
            </div>
            <div className="social-login">
              <a href="/" className="social-link">
                <FaFacebook />
              </a>
              <a href="/" className="social-link">
                <FcGoogle />
              </a>
            </div>
          </form>
        </div>
      </div>
      <ToastComponent />
    </>
  );
};

PopupLoginComponent.propTypes = {
  onClose: PropTypes.func,
  display: PropTypes.string,
  iniRegister: PropTypes.bool,
};

export default PopupLoginComponent;
