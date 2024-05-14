import "./card-comic.scss"


function CardComicComponent() {
    return ( 
        <>
            <ol className="breadcrumb">
          <li>
            <a href="https://truyenqqviet.com/">
              <span>Trang Chủ</span>
            </a>
          </li>
          <li>
            <a href="https://truyenqqviet.com/truyen-tranh/quy-vuong-ve-huu-15663">
              <span>Quỷ Vương Về Hưu</span>
            </a>
          </li>
        </ol>

        <div className="comic-content">
          <div className="book-avatar">
            <img
              alt="Quỷ Vương Về Hưu"
              src="https://i.truyenvua.com/ebook/190x247/quy-vuong-ve-huu_1713883674.jpg?gt=hdfgdfg&amp;mobile=2"
            />
          </div>
          <div className="book-other">
            <h1>Quỷ Vương Về Hưu</h1>
            <div className="txt">
              <ul className="list-info">
                <li className="author row">
                  <p className="name col">
                    <i className="fa fa-user"></i> Tác giả
                  </p>
                  <p className="">Đang Cập Nhật</p>
                </li>
                <li className="status row">
                  <p className="name col">
                    <i className="fa fa-rss"></i> Tình trạng
                  </p>
                  <p className="">Đang Cập Nhật</p>
                </li>
                <li className="row">
                  <p className="name col">
                    <i className="fa fa-thumbs-up"></i> Lượt thích
                  </p>
                  <p className="number-like">91</p>
                </li>
                <li className="row">
                  <p className="name col">
                    <i className="fa fa-heart"></i> Lượt theo dõi
                  </p>
                  <p className="">1,042</p>
                </li>
                <li className="row">
                  <p className="name col">
                    <i className="fa fa-eye"></i> Lượt xem
                  </p>
                  <p className="">102,583</p>
                </li>
              </ul>
            </div>

            <ul className="list-genres">
              <li className="li03">
                <a href="https://truyenqqviet.com/the-loai/action-26.html">
                  Action
                </a>
              </li>
              <li className="li03">
                <a href="https://truyenqqviet.com/the-loai/adventure-27.html">
                  Adventure
                </a>
              </li>
              <li className="li03">
                <a href="https://truyenqqviet.com/the-loai/romance-36.html">
                  Romance
                </a>
              </li>
              <li className="li03">
                <a href="https://truyenqqviet.com/the-loai/manhwa-49.html">
                  Manhwa
                </a>
              </li>
              <li className="li03">
                <a href="https://truyenqqviet.com/the-loai/truyen-mau-92.html">
                  Truyện Màu
                </a>
              </li>{" "}
            </ul>
            <ul className="story-detail-menu">
              <li className="li01">
                <a
                  href="https://truyenqqviet.com/truyen-tranh/quy-vuong-ve-huu-15663-chap-1.html"
                  className="button is-danger"
                >
                  <i className="fa fa-book"></i> Đọc từ đầu
                </a>
              </li>
              <li className="li02">
                <a
                  href="/"
                  className="button is-danger btn-subscribe subscribeBook"
                >
                  <span className="fa fa-heart"></span> Theo dõi
                </a>
              </li>
              <li className="li03">
                <a
                  href="/"
                  className="button is-danger is-rounded btn-like"
                  data-id="15663"
                >
                  <i className="fa fa-thumbs-up"></i> Thích
                </a>
              </li>
              <li className="li04">
                <a
                  href="https://truyenqqviet.com/truyen-tranh/quy-vuong-ve-huu-15663-chap-20.html"
                  className="button is-info is-rounded"
                >
                  <i className="fa fa-location-arrow" aria-hidden="true"></i> Đọc
                  tiếp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="description">
          <h3>
            <i className="fa fa-info-circle"></i> Giới thiệu
          </h3>
          <div className="description-content">
            <p>
              Khi Quỷ vương bị anh hùng thách thức, nói rằng hắn không biết gì
              về tình yêu, hắn ta thâm nhập vào học viện anh hùng của loài
              ngươi, nơi sự lãng mạn thăng hoa nhất. Và rồi cuối cùng phát hiện
              ra mục tiêu của thánh viện này... chính là giết chết Quỷ vương.
            </p>
          </div>
        </div>
        </>
     );
}

export default CardComicComponent;