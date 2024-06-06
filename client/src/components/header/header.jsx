import "./header.scss";
import { useEffect, useState, useRef } from "react";
import { TiLightbulb } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import PopupLoginComponent from "../popup/popup";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import * as actions from "../../store/actions";
import TopSearchComponent from "../top-search/top-search";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const headerRef = useRef();
  const { genres } = useSelector((state) => state.genre);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();

  const [navMobile, setNavMobile] = useState(false);
  const [navChildGenre, setNavChildGenre] = useState(false);
  const [navChildTop, setNavChildTop] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  useEffect(() => {
    dispatch(actions.getGenreDetails());
  }, [dispatch]);

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);

  const handleShowNavMobile = () => {
    setNavMobile(!navMobile);
  };

  const handleShowNavChildGenre = () => {
    setNavChildGenre(!navChildGenre);
  };

  const handleShowNavChildTop = () => {
    setNavChildTop(!navChildTop);
  };

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
  };

  const handleLogout = () => {
    dispatch(actions.logout());
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
  };

  return (
    <>
      <header ref={headerRef}>
        <div className="top">
          <div className="div_middle">
            <div className="left">
              <div className="logo">
                <Link to={"/"} title="Truyện tranh online">
                  <p className="pc_display"></p>
                  <img
                    alt="TruyenQQ"
                    className="mobile_display"
                    src="https://st.truyenqqviet.com/template/frontend/images/logo-icon.png"
                  />
                </Link>
              </div>
              <div className="change-mode">
                <button id="setting_dark_mode" className="dark_mode">
                  <TiLightbulb />
                </button>
              </div>

              <TopSearchComponent />
            </div>
            <div className="right">
              <div className="button-user">
                {!isLoggedIn && (
                  <>
                    <span>
                      <button onClick={handleRegisterClick}>Đăng ký</button>
                    </span>
                    <span>
                      <button onClick={handleLoginClick}>Đăng nhập</button>
                    </span>
                  </>
                )}
                {isLoggedIn && (
                  <>
                    <small>Name !</small>
                    <span>
                      <button onClick={handleLogout}>Đăng Xuất</button>
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="middle">
            <ul className="middle_menu">
              <li className="middle_menu_item">
                <Link to={"/"} className="middle_menu_item_title">
                  Trang Chủ
                </Link>
              </li>
              <span className="middle_menu_fabars" onClick={handleShowNavMobile}>
                <FaBars />
              </span>
              <li className="middle_menu_item">
                <p className="middle_menu_item_title_custom">
                  Thể Loại <IoMdArrowDropdown />
                </p>
                <div className="hidden_menu">
                  <div className="book_tags">
                    <div className="book_tags_content">
                      {genres?.length > 0 &&
                        genres.map((item) => {
                          return (
                            <p key={item.category_id}>
                              <Link
                                title="Action"
                                to={`genre/${item.name}?page=1`}
                                className={"asd"}
                              >
                                {item.name}
                              </Link>
                            </p>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </li>
              <li className="middle_menu_item">
                <p className="middle_menu_item_title_custom">
                  Xếp Hạng <IoMdArrowDropdown />
                </p>
                <div className="hidden_menu">
                  <div className="book_tags">
                    <div className="book_tags_content">
                      <p>
                        <a title="Ngày" href="/">
                          Top Ngày
                        </a>
                      </p>
                      <p>
                        <a title="Tuần" href="/">
                          Top Tuần
                        </a>
                      </p>
                      <p>
                        <a title="Tháng" href="/">
                          Top Tháng
                        </a>
                      </p>
                      <p>
                        <a title="Yêu Thích" href="/">
                          Yêu Thích
                        </a>
                      </p>
                      <p>
                        <a title="Truyện Mới" href="/">
                          Truyện Mới
                        </a>
                      </p>
                      <p>
                        <a title="Truyện Full" href="/">
                          Truyện Full
                        </a>
                      </p>
                      <p>
                        <a title="Truyện Ngẫu Nhiên" href="/">
                          Truyện Ngẫu Nhiên
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="middle_menu_item">
                <a className="middle_menu_item_title" href="/">
                  Tìm Truyện
                </a>
              </li>
              <li className="middle_menu_item">
                <a className="middle_menu_item_title" href="/">
                  Lịch Sử
                </a>
              </li>
              <li className="middle_menu_item">
                <a className="middle_menu_item_title" href="/">
                  Theo Dõi
                </a>
              </li>
              <li className="middle_menu_item">
                <a className="middle_menu_item_title" href="/">
                  Thảo Luận
                </a>
              </li>
              <li className="middle_menu_item">
                <a className="middle_menu_item_title" href="/">
                  Fanpage
                </a>
              </li>
              <li className="middle_menu_item">
                <a className="middle_menu_item_title" href="/">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          {navMobile && (
            <div className="nav-menu-mobile mobile_display">
              <div className="nav-mobile-item">
                <ul>
                  <li>
                    <p className="title" onClick={handleShowNavChildGenre}>
                      Thể Loại <IoMdArrowDropdown />
                    </p>
                    {navChildGenre && (
                      <div className="book-tags">
                        <div className="book-tags-content">
                          <p>Action</p>
                          <p>Adventure</p>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <p className="title" onClick={handleShowNavChildTop}>
                      Xếp Hạng <IoMdArrowDropdown />
                    </p>
                    {navChildTop && (
                      <div className="book-tags">
                        <div className="book-tags-content">
                          <p>Top Ngày</p>
                          <p>Top Tuần</p>
                          <p>Top Tháng</p>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>Con Gái</li>
                  <li>Con Trai</li>
                  <li>Tìm Truyện</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
      <PopupLoginComponent
        display={showLoginPopup ? "show" : ""}
        onClose={handleClosePopup}
        iniRegister={false}
      />
      <PopupLoginComponent
        display={showRegisterPopup ? "show" : ""}
        onClose={handleClosePopup}
        iniRegister={true}
      />
    </>
  );
};

export default HeaderComponent;
