import MainContentComponent from "../main-content/main-content";
import "./content-home.scss";
import { FaFilter } from "react-icons/fa";

const ContentHomeComponent = () => {
  return (
    <>
      <div className="home-hero">
        <div className="main-homepage">
          <div className="homepage-tags">
            <h1>
              <p className="text-list-update">
                <a href="https://truyenqqviet.com/truyen-moi-cap-nhat.html">
                  <i className="fa fa-cloud-download" aria-hidden="true"></i>
                  Truyện mới cập nhật
                </a>
              </p>
            </h1>
            <div className="sort">
              <a href="https://truyenqqviet.com/tim-kiem-nang-cao.html">
                <button>
                  {" "}
                  <FaFilter className="icon"/> 
                </button>
              </a>
            </div>
          </div>

          <MainContentComponent />

          <div className="homepage-more">
            <a
              href="https://truyenqqviet.com/truyen-moi-cap-nhat/trang-2.html"
              className="view-more-btn"
            >
              Xem thêm nhiều truyện
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHomeComponent;
