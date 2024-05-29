import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStories } from "../../store/actions/story";
import "./top-search.scss";
import icons from "../../utils/icons";
import { formatVietnameseToString } from "../../utils/common/formatVietnameseToString";

const TopSearchComponent = () => {
const { FaSearch} = icons;

  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.story);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setShowResults(true);
      const results = stories.filter((story) =>
        story.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  }, [searchTerm, stories]);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchTerm("");
  };

  return (
    <div className="top_search">
      <input
        type="text"
        className="search"
        placeholder="Tìm kiếm..."
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="search-button">
      <FaSearch/>
      </button>
      {showResults && (
        <div className="search_result open">
          <ul>
            {searchResults.length > 0 ? (
              searchResults.map((story) => (
                <li key={story.story_id} onClick={handleResultClick}>
                  <Link to={`/story/${formatVietnameseToString(story.name)}/${story.story_id}`}>
                    <div className="search-content">
                      <div className="search_avatar">
                        <img src={story.image} alt={story.name} />
                      </div>
                      <div className="search_info">
                        <div className="name">{story.name}</div>
                        <p>Chương {story.chapter_count}</p>
                        <p>{story.timeSinceLastUpdate}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopSearchComponent;
