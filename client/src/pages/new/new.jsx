import "./new.scss";
// import ContentHomeComponent from "../../components/content-home/content-home";
import PaginateComponent from "../../components/paginate/paginate";
import PopupComponent from "../../components/popup/popup";
import SearchCategory from "../../components/search/search";
import { useSearchParams } from "react-router-dom";
import MainContentComponent from "../../components/main-content/main-content";
const NewPage = () => {
  const [params] = useSearchParams();
  console.log("params ==>", params.get("page"));

  return (
    <>
      <SearchCategory />
      <div className="home-hero">
        <div className="main-homepage">
          <MainContentComponent page={params.get("page")} />
        </div>
      </div>
      <PaginateComponent page={params.get("page")} />
      <PopupComponent />
    </>
  );
};

export default NewPage;
