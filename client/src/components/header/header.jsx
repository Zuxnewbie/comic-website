import "./header.scss";
import { useEffect, useState, useRef } from "react";
import { TiLightbulb } from "react-icons/ti";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import PopupLoginComponent from "../popup/popup";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import * as actions from "../../store/actions";
import { apiGetGenres } from '../../services/category'
import {formatVietnameseToString} from '../../utils/common/formatVietnameseToString'
// import { useNavigate } from "react-router-dom";
// import validate from "../../utils/validate";
const HeaderComponent = () => {
  const dispatch = useDispatch();
  const headerRef = useRef()
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams()

  const [navMobile, setNavMobile] = useState(false);
  const [navChildGenre, setNavChildGenre] = useState(false);
  const [navChildTop, setNavChildTop] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetGenres()
      // console.log("response from category", response);
      if (response?.data.err === 0) {
        setCategories(response.data.response)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [searchParams.get('page')])


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

  // const genre = [
  //   { name: "Hài Hước", path: "hai-huoc" },
  //   { name: "Huyền Huyễn", path: "huyen-huyen" },
  //   { name: "Khoa Huyền", path: "khoa-huyen" },
  //   { name: "Kiếm Hiệp", path: "kiem-hiep" },
  //   { name: "Lịch Sử", path: "lich-su" },
  //   { name: "Light Novel", path: "light-novel" },
  //   { name: "Linh Di", path: "linh-di" },
  //   { name: "Mạt Thế", path: "mat-the" },
  //   { name: "Ngôn Tình", path: "ngon-tinh" },
  //   { name: "Nữ Phụ", path: "nu-phu" },
  // ];

  // const handleValidate = () => {
  //   validate.validateEmail(email);
  // }

  return (
    <>
      <header ref={headerRef}>
        <div className="top">
          <div className="div_middle">
            <div className="left">
              <div className="logo">
                <Link href="/" title="Truyện tranh online">
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
              <div className="top_search">
                <input
                  className="search"
                  id="search_input"
                  placeholder="Bạn muốn tìm truyện gì"
                />
                <button className="search-button">
                  <FaSearch />
                </button>
                <div className="search_result">
                  <ul>
                    <li>
                      <a href="/">
                        <div className="search-content">
                          <div className="search_avatar">
                            <img
                              src="https://i.truyenvua.com/ebook/80x105/diem-de_1552231811.jpg?gt=hdfgdfg&amp;mobile=2"
                              alt="img"
                            />
                          </div>
                          <div className="search_info">
                            <p className="name">Diêm Đế</p>
                            <p>Chương 384</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
                      <button onClick={() => dispatch(actions.logout())}>
                        Đăng Xuất
                      </button>
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
                <a className="middle_menu_item_title" href="/">
                  Trang Chủ
                </a>
              </li>
              <span
                className="middle_menu_fabars"
                onClick={handleShowNavMobile}
              >
                <FaBars />
              </span>
              <li className="middle_menu_item">
                <p className="middle_menu_item_title_custom">
                  Thể Loại <IoMdArrowDropdown />
                </p>
                <div className="hidden_menu">
                  <div className="book_tags">
                    <div className="book_tags_content">
                      {categories?.length > 0 &&
                        categories.map((item) => {
                          return (
                              <p key={item.category_id}>
                                <NavLink title="Action" to={`${formatVietnameseToString(item.name)}`} className={"asd"}>
                                  {item.name}
                                  {item.category_id}
                                </NavLink>
                              </p>
                          );
                        })}

                      {/* <p>
                        <a title="Adventure" href="/">
                          Adventure
                        </a>
                      </p> */}
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
                        <a title="Mới Cập Nhật" href="/">
                          Mới Cập Nhật
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
                  Con Gái
                </a>
              </li>
              <li className="middle_menu_item">
                <a className="middle_menu_item_title" href="/">
                  Con Trai
                </a>
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
