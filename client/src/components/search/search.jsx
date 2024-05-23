import "./search.scss";
const SearchCategory = () => {
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
                        <option value="https://truyenqqviet.com/the-loai/action-26.html">
                          Action
                        </option>
                        <option
                          value="https://truyenqqviet.com/the-loai/adventure-27.html"
                        >
                          Adventure
                        </option>
                        <option value="https://truyenqqviet.com/the-loai/anime-62.html">
                          Anime
                        </option>
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
