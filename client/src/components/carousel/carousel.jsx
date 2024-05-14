import "./carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* eslint-disable react/prop-types */

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "15px",width: "auto", height: "auto" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "1", left: "15px",width: "auto", height: "auto"}}
      onClick={onClick}
    />
  );
}

const OwlCarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
        <div className="slider-title">
          <h2>
              <p className="text_list_hot">
                  <i className="fa fa-star"></i> Truyện hay
              </p>
          </h2>
        </div>
      <Slider {...settings}>

        <div className="card">
          <div className="book_avatar">
            <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893">
              <img
                className="center"
                src="https://i.truyenvua.com/ebook/190x247/tinh-vo-than-quyet_1468459143.jpg?gt=hdfgdfg&amp;mobile=2"
                alt="Tinh Võ Thần Quyết"
              />
            </a>
            <div className="top-notice">
              <span className="time-ago">25 Phút Trước</span>
              <span className="type-label hot">Hot</span>
            </div>
          </div>
          <div className="book_info">
            <div className="book_name">
              <h3 className="name">
                <a
                  title="Tinh Võ Thần Quyết"
                  href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893"
                >
                  Tinh Võ Thần Quyết
                </a>
              </h3>
            </div>
            <div className="last_chapter">
              <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893-chap-669.html">
                Chương 669
              </a>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="book_avatar">
            <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893">
              <img
                className="center"
                src="https://i.truyenvua.com/ebook/190x247/moto-saikyou-no-kenshi-wa-isekai-mahou-ni-akogareru_1520566226.jpg?gt=hdfgdfg&mobile=2"
                alt="Tinh Võ Thần Quyết"
              />
            </a>
            <div className="top-notice">
              <span className="time-ago">3 Ngày Trước</span>
              <span className="type-label hot">Hot</span>
            </div>
          </div>
          <div className="book_info">
            <div className="book_name">
              <h3 className="name">
                <a
                  title="Moto Saikyou No Kenshi Wa, Isekai Mahou Ni Akogareru"
                  href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893"
                >
                  Moto Saikyou No Kenshi Wa, Isekai Mahou Ni Akogareru
                </a>
              </h3>
            </div>
            <div className="last_chapter">
              <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893-chap-669.html">
                Chương 45
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="book_avatar">
            <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893">
              <img
                className="center"
                src="https://i.truyenvua.com/ebook/190x247/truyen-vo_1542812509.jpg?gt=hdfgdfg&mobile=2"
                alt="Truyền Võ"
              />
            </a>
            <div className="top-notice">
              <span className="time-ago">22 Giờ Trước</span>
              <span className="type-label hot">Hot</span>
            </div>
          </div>
          <div className="book_info">
            <div className="book_name">
              <h3 className="name">
                <a
                  title="Truyền Võ"
                  href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893"
                >
                  Truyền Võ
                </a>
              </h3>
            </div>
            <div className="last_chapter">
              <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893-chap-669.html">
              Chương 240
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="book_avatar">
            <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893">
              <img
                className="center"
                src="https://i.truyenvua.com/ebook/190x247/than-y-dich-nu_1464263596.jpg?gt=hdfgdfg&mobile=2"
                alt="Tinh Võ Thần Quyết"
              />
            </a>
            <div className="top-notice">
              <span className="time-ago">23 Giờ Trước</span>
              <span className="type-label hot">Hot</span>
            </div>
          </div>
          <div className="book_info">
            <div className="book_name">
              <h3 className="name">
                <a
                  title="Tinh Võ Thần Quyết"
                  href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893"
                >
                  Thần Y Đích Nữ
                </a>
              </h3>
            </div>
            <div className="last_chapter">
              <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893-chap-669.html">
                Chương 317
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="book_avatar">
            <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893">
              <img
                className="center"
                src="https://i.truyenvua.com/ebook/190x247/vua-thang-cap_1571835515.jpg?gt=hdfgdfg&mobile=2"
                alt="Tinh Võ Thần Quyết"
              />
            </a>
            <div className="top-notice">
              <span className="time-ago">1 Ngày Trước</span>
              <span className="type-label hot">Hot</span>
            </div>
          </div>
          <div className="book_info">
            <div className="book_name">
              <h3 className="name">
                <a
                  title="Tinh Võ Thần Quyết"
                  href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893"
                >
                  Vua Thăng Cấp
                </a>
              </h3>
            </div>
            <div className="last_chapter">
              <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893-chap-669.html">
                Chương 170
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="book_avatar">
            <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893">
              <img
                className="center"
                src="https://i.truyenvua.com/ebook/190x247/nguyen-ton_1513349962.jpg?gt=hdfgdfg&mobile=2"
                alt="Tinh Võ Thần Quyết"
              />
            </a>
            <div className="top-notice">
              <span className="time-ago">3 Ngày Trước</span>
              <span className="type-label hot">Hot</span>
            </div>
          </div>
          <div className="book_info">
            <div className="book_name">
              <h3 className="name">
                <a
                  title="Tinh Võ Thần Quyết"
                  href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893"
                >
                  Nguyên Tôn
                </a>
              </h3>
            </div>
            <div className="last_chapter">
              <a href="https://truyenqqviet.com/truyen-tranh/tinh-vo-than-quyet-1893-chap-669.html">
                Chương 843
              </a>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default OwlCarouselComponent;
