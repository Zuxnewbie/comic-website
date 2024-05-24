import "./main-content.scss";
// import { apiGetAllStory } from '../../services/listStory'
import { getStoriesLimit } from "../../store/actions/story";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from 'react-router-dom'
import { formatVietnameseToString } from "../../utils/common/formatVietnameseToString";

const MainContentComponent = ({ page }) => {
  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.story);

  // console.log("stories from main-content", stories);
  // console.log("count from main-content", count);
  // const [listStory, setListStory] = useState([])

  useEffect(() => {
    let offset = page ? +page - 1 : 0;

    dispatch(getStoriesLimit(offset));
  }, [page]);

  // console.log("page", page);
  // console.log("stories result =>>>", stories);
  // console.log("count =>>>", count);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const response = await apiGetAllStory()
  //     // console.log("response from category", response);
  //     if (response?.data.err === 0) {
  //       setListStory(response.data.response)
  //     }
  //   }
  //   fetchCategories()
  // }, [])
  return (
    <div className="homepage-list">
      <ul className="homepage-list-item">
        {stories?.length > 0 &&
          stories.map((item) => {
            return (
              <li key={item.story_id}>
                <div className="book_avatar">
                  <Link to={`/detail/${formatVietnameseToString(item.name)}/${item.story_id}`}>
                    <img className="center" src={item.image} alt={item.name} />
                  </Link>
                  <div className="top-notice">
                    <span className="time-ago">{item.timeSinceLastUpdate}</span>
                    <span className="type-label hot">Hot </span>
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
            );
          })}
      </ul>
    </div>
  );
};

export default MainContentComponent;
