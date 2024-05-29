import "./search.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { getStoryByGenre } from "../../store/actions/story";

const SearchCategory = ({ genre }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { genres } = useSelector((state) => state.genre);
  const [selectedGenre, setSelectedGenre] = useState(genre);

  useEffect(() => {
    dispatch(actions.getGenreDetails());
  }, [dispatch]);

  useEffect(() => {
    if (selectedGenre) {
      dispatch(getStoryByGenre(selectedGenre));
    }
  }, [dispatch, selectedGenre]);

  const currentGenre = genres?.find((item) => item.name === genre);


  const handleGenreChange = (event) => {
    const newGenre = event.target.value;
    setSelectedGenre(newGenre);
    navigate(`/genre/${newGenre}`);
  };

  console.log("current Gen re", currentGenre);

  return (
    <div className="search-container">
      <div className="homepage-tags">
        <h1>
          <p className="text-list-update">
            <a href="https://truyenqqviet.com/truyen-moi-cap-nhat.html">
              <i className="fa fa-font-awesome" aria-hidden="true"></i>
              {currentGenre ? `Thể Loại - ${currentGenre.name}` : ""}
            </a>
          </p>
        </h1>
      </div>

      <div className="tags_detail">
        {currentGenre && <b>{currentGenre.description}</b>}
      </div>

      <div className="story-list box">
        <table>
          <tbody>
            {currentGenre && (
              <tr>
                <th>Thể loại truyện</th>
                <td>
                  <div className="select is-warning">
                    <select id="category" value={selectedGenre} onChange={handleGenreChange}>
                      {genres?.length > 0 &&
                        genres.map((item) => (
                          <option
                            key={`genre${item.category_id}`}
                            value={item.name}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </td>
              </tr>
            )}

            <tr>
              <th>Tình trạng</th>
              <td>
                <ul className="choose">
                  <li>
                    <a
                      className=""
                      href="https://truyenqqviet.com/truyen-con-gai/trang-1.html?status=0"
                    >
                      Đang tiến hành
                    </a>
                  </li>
                  <li>
                    <a
                      className=""
                      href="https://truyenqqviet.com/truyen-con-gai/trang-1.html?status=2"
                    >
                      Hoàn thành
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Sắp xếp</th>
              <td>
                <div className="select">
                  <select id="filter">
                    <option value="https://truyenqqviet.com/the-loai/action-26.html">
                      Ngày đăng giảm dần
                    </option>
                    <option value="https://truyenqqviet.com/the-loai/adventure-27.html">
                      Ngày đăng tăng dần
                    </option>
                    <option value="https://truyenqqviet.com/the-loai/anime-62.html">
                      Lượt xem giảm dần
                    </option>
                    <option value="https://truyenqqviet.com/the-loai/anime-62.html">
                      Lượt xem tăng dần
                    </option>
                    <option value="https://truyenqqviet.com/the-loai/anime-62.html">
                      Ngày cập nhật giảm dần
                    </option>
                    <option value="https://truyenqqviet.com/the-loai/anime-62.html">
                      Ngày cập nhật tăng dần
                    </option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchCategory;
