import "./search.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../store/actions";

const SearchCategory = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genre);

  useEffect(() => {
    dispatch(actions.getGenreDetails());
  }, []);

  return (
    <div className="search-container">
      <div className="homepage-tags">
        <h1>
          <p className="text-list-update">
            <a href="https://truyenqqviet.com/truyen-moi-cap-nhat.html">
              <i className="fa fa-font-awesome" aria-hidden="true"></i>
              Truyện mới cập nhật
            </a>
          </p>
        </h1>
      </div>

      <div className="story-list box">
        <table>
          <tbody>
            <tr>
              <th>Thể loại truyện</th>
              <td>
                <div className="select is-warning">
                  <select id="category">
                    {genres?.length > 0 &&
                      genres.map((item) => {
                        return (
                          <option
                            key={`genre` + item.category_id}
                            value="https://truyenqqviet.com/the-loai/action-26.html"
                          >
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </td>
            </tr>

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
