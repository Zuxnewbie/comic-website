import  { useState } from "react";
import PropTypes from "prop-types";
import "./popup.scss";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const PopupRegisterComponent = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup register">
      <div id="popup-content">
        <div className="popup_content popup_center">
          <h2 className="">Đăng ký mới</h2>
          <ul className="module_register">
          <li>
              <p>Name</p>
              <input
                maxLength="150"
                id="name_register"
                value={name}
                onChange={handleNameChange}
              />
            </li>
            <li>
              <p>Email</p>
              <input
                maxLength="150"
                id="email_register"
                value={email}
                onChange={handleEmailChange}
              />
            </li>
            <li>
              <p>Mật khẩu:</p>
              <input
                type="password"
                id="password_register"
                value={password}
                onChange={handlePasswordChange}
              />
            </li>
          </ul>
          <div className="button-row">
            <div className="login_redirect">
              <p>
                <a className="module_login" href="/">
                  Đăng nhập
                </a>
              </p>
            </div>
            <div className="yes_no">
              <button type="button" className="yes">
                Đăng ký
              </button>
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
        </div>
      </div>
    </div>
  );
};

PopupRegisterComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupRegisterComponent;
