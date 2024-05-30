// pages/genres/genres.jsx
import { useParams } from "react-router-dom";
import SearchCategory from "../../components/search-normal/search";
import MainContentComponent from "../../components/main-content/main-content";

const GenresPage = () => {
  const { genre } = useParams();

  return (
    <>
      <SearchCategory genre={genre}/>
      <div className="home-hero">
        <div className="main-homepage">
          <MainContentComponent genre={genre} />
        </div>
      </div>
    </>
  );
};

export default GenresPage;
