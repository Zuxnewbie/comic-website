import BannerComponent from "../../components/banner/banner";
import OwlCarouselComponent from "../../components/carousel/carousel";
import HeaderComponent from "../../components/header/header";
import FooterComponent from "../../components/footer/footer";
import ContentHomeComponent from "../../components/content-home/content-home";
import PopupComponent from "../../components/popup-register/popup";
const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <OwlCarouselComponent />
      <ContentHomeComponent />
      <FooterComponent />
      <PopupComponent />
    </>
  );
};

export default HomePage;
