import SearchCategory from "../../components/search/search";
import { useSearchParams } from "react-router-dom";
import CardStoryComponent from "../../components/card-story/card-story";
import ListChapterComponent from "../../components/list-chapter/list-chapter";
const StoryDetail = () => {
  const [params] = useSearchParams();
  console.log("params ==>", params.get("page"));

  return (
    <>
      <SearchCategory />
      <div className="home-hero">
        <div className="main-homepage">
          <CardStoryComponent />
          <ListChapterComponent />
          
        </div>
      </div>
    </>
  );
};

export default StoryDetail;
