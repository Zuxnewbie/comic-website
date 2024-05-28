import "./main-content.scss";
import { getStories, getStoriesLimit, getStoryByGenre } from "../../store/actions/story";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../../utils/common/formatVietnameseToString";

const MainContentComponent = ({ page, isNewPage, genre }) => {
  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.story);

  useEffect(() => {
    let offset = page ? +page - 1 : 0;

    if (genre) {
      dispatch(getStoryByGenre(genre));
    } else if (isNewPage) {
      dispatch(getStoriesLimit(offset));
    } else {
      dispatch(getStories());
    }
    
  }, [page, isNewPage, genre, dispatch]);

  

  // console.log("Genre:", genre);
  // console.log("Stories:", stories);

  return (
    <div className="homepage-list">
      <ul className="homepage-list-item">
        {stories?.length > 0 ? (
          stories.map((item) => (
            <li key={item.story_id}>
              <div className="book_avatar">
                <Link to={`/detail/${formatVietnameseToString(item.name)}/${item.story_id}`}>
                  <img className="center" src={item.image} alt={item.name} />
                </Link>
                <div className="top-notice">
                  <span className="time-ago">{item.timeSinceLastUpdate}</span>
                  <span className="type-label hot">Hot</span>
                </div>
              </div>
              <div className="book_info">
                <div className="book_name">
                  <h3 className="name">
                    <Link to={`/detail/${formatVietnameseToString(item.name)}/${item.story_id}`} title={item.name}>
                      {item.name}
                    </Link>
                  </h3>
                </div>
                <div className="last_chapter">
                  <Link to={`/detail/${formatVietnameseToString(item.name)}/${item.story_id}`}>
                    Chương {item.chapter_count}
                  </Link>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p>No stories available.</p>
        )}
      </ul>
    </div>
  );
};

export default MainContentComponent;
