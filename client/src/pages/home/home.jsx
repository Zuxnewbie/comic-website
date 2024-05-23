import BannerComponent from "../../components/banner/banner";
import OwlCarouselComponent from "../../components/carousel/carousel";
// import ContentHomeComponent from "../../components/content-home/content-home";
import MainContentComponent from "../../components/main-content/main-content";
import PopupComponent from "../../components/popup/popup";
import "./home.scss"
const HomePage = () => {
  return (
    <>
      <BannerComponent />
      <OwlCarouselComponent />
      <div className="homepage-tags">
        <h1>
          <p className="text-list-update">
            <a href="https://truyenqqviet.com/truyen-moi-cap-nhat.html">
              <i className="fa fa-cloud-download" aria-hidden="true"></i>
              Truyện mới cập nhật
            </a>
          </p>
        </h1>
      </div>

      <div className="home-hero">
        <div className="main-homepage">

          <MainContentComponent />


        </div>
      </div>

      <div className="homepage-more">
        <a
          href="https://truyenqqviet.com/truyen-moi-cap-nhat/trang-2.html"
          className="view-more-btn"
        >
          Xem thêm nhiều truyện
        </a>
      </div>

      <PopupComponent />
    </>
  );
};

export default HomePage;
