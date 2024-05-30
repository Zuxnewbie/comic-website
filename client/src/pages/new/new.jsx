import "./new.scss";
// import ContentHomeComponent from "../../components/content-home/content-home";
import PaginateComponent from "../../components/paginate/paginate";
import PopupComponent from "../../components/popup/popup";
import SearchCategory from "../../components/search-normal/search";
import { useSearchParams } from "react-router-dom";
import MainContentComponent from "../../components/main-content/main-content";
const NewPage = () => {
  const [params] = useSearchParams();
  const page = params.get("page");
  console.log("params ==>", page);

  return (
    <>
      <SearchCategory />
      <div className="home-hero">
        <div className="main-homepage">
          {/* <MainContentComponent page={page} /> */}
          <MainContentComponent page={page} isNewPage={true} /> {/* Set isNewPage to true */}
        </div>
      </div>
      <PaginateComponent page={page} />
      <PopupComponent />
    </>
  );
};

export default NewPage;
