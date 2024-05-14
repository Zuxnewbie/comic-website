import "./search.scss";
const SearchCategory = () => {
  return (
    <>
        <div className="homepage-tags">
          <h1>
            <p className="text-list-update">
              <a href="https://truyenqqviet.com/truyen-moi-cap-nhat.html">
                <i className="fa fa-font-awesome" aria-hidden="true"></i>
                Truyện mới cập nhật
              </a>
            </p>
          </h1>
          <div className="sort">
            <a href="https://truyenqqviet.com/tim-kiem-nang-cao.html">
              <button>
                {" "}
                <i className="fa fa-filter" aria-hidden="true"></i>
              </button>
            </a>
          </div>
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
                        selected=""
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
                <th>Quốc gia</th>
                <td>
                  <ul className="choose">
                    <li>
                      <a
                        className=""
                        title="Truyện Trung Quốc"
                        href="https://truyenqqviet.com/truyen-con-gai/trang-1.html?country=1"
                      >
                        Trung Quốc
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        title="Truyện Việt Nam"
                        href="https://truyenqqviet.com/truyen-con-gai/trang-1.html?country=2"
                      >
                        Việt Nam
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        title="Truyện Hàn Quốc"
                        href="https://truyenqqviet.com/truyen-con-gai/trang-1.html?country=3"
                      >
                        Hàn Quốc
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        title="Truyện Nhật Bản"
                        href="https://truyenqqviet.com/truyen-con-gai/trang-1.html?country=4"
                      >
                        Nhật Bản
                      </a>
                    </li>
                    <li>
                      <a
                        className=""
                        title="Truyện Mỹ"
                        href="https://truyenqqviet.com/truyen-con-gai/trang-1.html?country=5"
                      >
                        Mỹ
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default SearchCategory;
