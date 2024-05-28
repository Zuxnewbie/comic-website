// pages/genres/genres.jsx
import { useParams } from "react-router-dom";
import SearchCategory from "../../components/search/search";
import MainContentComponent from "../../components/main-content/main-content";

const GenresPage = () => {
  const { genre } = useParams();

  return (
    <>
      <SearchCategory />
      <div className="home-hero">
        <div className="main-homepage">
          <MainContentComponent genre={genre} />
        </div>
      </div>
    </>
  );
};

export default GenresPage;
