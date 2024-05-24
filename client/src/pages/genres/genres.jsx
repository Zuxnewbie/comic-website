

// import PaginateComponent from "../../components/paginate/paginate";
import PopupComponent from "../../components/popup/popup";
import SearchCategory from "../../components/search/search";
import { useSearchParams } from "react-router-dom";
import MainContentComponent from "../../components/main-content/main-content";
const GenresPage = () => {
  const [params] = useSearchParams();
  const page = params.get("page");
  console.log("params ==>", page);

  return (
    <>
      <SearchCategory />
      <div className="home-hero">
        <div className="main-homepage">
          {/* <MainContentComponent page={page} /> */}
          <MainContentComponent/> 
        </div>
      </div>
      {/* <PaginateComponent/> */}
      <PopupComponent />
    </>
  );
};

export default GenresPage;
