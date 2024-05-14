import "./popup.scss";
import  { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import PropTypes from 'prop-types';

const PopupLoginComponent = ( { isVisible, onClose } ) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isRegister, setIsRegister] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="popup login">
        <div id="popup-content">
          <div className="popup_content popup_center">
            <h2 className="">Đăng nhập</h2>
            <ul className="module_login">
              <li>
                <p>Email</p>
                <input maxLength="150" id="email_login" value={email}
                onChange={handleEmailChange}/>
              </li>
              <li>
                <p>Mật khẩu:</p>
                <input type="password" id="password_login" value={password} onChange={handlePasswordChange} />
              </li>
            </ul>
            <div className="button-row">
              <div className="login_redirect">
                <p>
                  <span className="module_login" onClick={( ) => {}}>
                    Đăng ký
                  </span>
                </p>
              </div>
              <div className="yes_no">
                <button type="button" className="yes">
                  Đăng nhập
                </button>
                <button type="button" className="no"  onClick={onClose}>
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
    </>
  );
};

PopupLoginComponent.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopupLoginComponent;
