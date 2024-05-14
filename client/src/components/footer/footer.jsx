import "./footer.scss";

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <div className="container-content">
        <div className="left">
          <p
            className="para"
          >
            <a className="url" href="/">
              <img
                className="logo"
                src="https://st.truyenqqviet.com/template/frontend/images/logo.png"
                alt="TruyenQQ - Truyện tranh Online"
              />
            </a>
          </p>

          <span>
            <iframe
              title="Facebook Page"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftruyenqqq&amp;tabs=timeline&amp;width=340&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=false&amp;appId=1385880154835661"
              width="340"
              height="130"
              style={{border: 'none', overflow: 'hidden'}}
              scrolling="no"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </span>
        </div>
        
        <div className="right">
          <ul>
            <li>
              <a href="/">Truyện Tranh</a>
            </li>
            <li>
              <a href="/">Truyện Tranh Online</a>
            </li>
            <li>
              <a href="/">Truyện Tranh Mới</a>
            </li>
            <li>
              <a href="/">Truyện Tranh Hay</a>
            </li>
            <li>
              <a href="/">Đọc Truyện Tranh</a>
            </li>
            <li>
              <a href="/the-loai/manhwa-49.html">Manhwa</a>
            </li>
            <li>
              <a href="/the-loai/manhua-35.html">Manhua</a>
            </li>
            <li>
              <a href="/truyen-moi-cap-nhat/trang-1.html?country=4">Manga</a>
            </li>
            <li>
              <a href="/the-loai/ngon-tinh-87.html">Truyện Ngôn Tình</a>
            </li>
            <li>
              <a href="/tag/nettruyen">nettruyen</a>
            </li>
            <li>
              <a href="/tag/toptruyen">toptruyen</a>
            </li>
            <li>
              <a href="/tag/blogtruyen">blogtruyen</a>
            </li>
            <li>
              <a href="/tag/vcomycs">vcomycs</a>
            </li>
            <li>
              <a href="/tag/protruyen">protruyen</a>
            </li>
            <li>
              <a href="/tag/tusachxinh">tusachxinh</a>
            </li>
            <li>
              <a href="/tag/tutientruyen">tutientruyen</a>
            </li>
            <li>
              <a href="/tag/teamlanhlung">teamlanhlung</a>
            </li>
            <li>
              <a href="https://anivn.club/" rel="noreferrer">
                xem anime
              </a>
            </li>
            <li>
              <a href="https://anivn.club/" rel="noreferrer">
                anime vietsub
              </a>
            </li>
            <li>
              <a href="https://caytruyen.vn/" rel="noreferrer">
                đọc truyện chữ
              </a>
            </li>
            <li>
              <a href="https://caytruyen.vn/" rel="noreferrer">
                truyện chữ
              </a>
            </li>
            <li>
              <a href="https://caytruyen.vn/" rel="noreferrer">
                caytruyen
              </a>
            </li>

          </ul>
          <p className="link">Email: truyenqq@proton.me</p>
          <p className="link">
            <a href="/tin-tuc/chinh-sach-bao-mat.html">Chính Sách Bảo Mật</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
