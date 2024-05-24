import "./main-content.scss";
import { apiGetAllStory } from "../../services/listStory";
import { getStoriesLimit } from "../../store/actions/story";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../../utils/common/formatVietnameseToString";

const MainContentComponent = ({ page, isNewPage }) => {
  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.story);
  const [listStory, setListStory] = useState([]);

  useEffect(() => {
    let offset = page ? +page - 1 : 0;
    if (isNewPage) {
      dispatch(getStoriesLimit(offset));
    } else {
      const fetchStory = async () => {
        const response = await apiGetAllStory();
        if (response?.data.err === 0) {
          setListStory(response.data.response);
        }
      };
      fetchStory();
    }
  }, [page, isNewPage, dispatch]);

  const displayedStories = isNewPage ? stories : listStory;

  return (
    <div className="homepage-list">
      <ul className="homepage-list-item">
        {displayedStories?.length > 0 &&
          displayedStories.map((item) => (
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
          ))}
      </ul>
    </div>
  );
};

export default MainContentComponent;
