import { useState } from "react";
import "./style.scss";
import { useForm } from "react-hook-form";
import image from "../../assets/img/logo.png";
import { validateName, validatePassword } from "@/utils/validation.util";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginAdminLayout() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Xử lý logic đăng nhập ở đây
    console.log(data);
    console.log("success");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form className="main-form-content animate" onSubmit={handleSubmit(onSubmit)}>
          <div className="content-image">
            <img
              src={image}
              alt="Avatar"
              width={150}
              height={150}
              className="avatar"
            />
          </div>
          <div className="content-detail">
            <label htmlFor="uname">
              <b>Tài khoản</b>
            </label>
            <input
              className="username"
              type="text"
              placeholder="Nhập tài khoản"
              {...register("username", {
                required: "Tài khoản không được để trống",
                validate: {
                  invalidName: (value) =>
                    validateName(value) ||
                    "Tên tài khoản không hợp lệ",
                },
              })}
            />
            <small className="error">{errors.username?.message}</small>

            <label htmlFor="psw">
              <b>Mật khẩu</b>
            </label>
            <div className="password-content">
              <input
                className="password"
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                {...register("password", {
                  required: "Mật khẩu không được để trống",
                  validate: {
                    invalidPassword: (value) =>
                      validatePassword(value) ||
                      "Mật khẩu không hợp lệ",
                  },
                })}
              />
              <div
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
            <small className="error">{errors.password?.message}</small>

            <button className="submit-btn" type="submit">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
