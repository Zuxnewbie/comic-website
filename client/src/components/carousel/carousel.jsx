import { useEffect, useState } from "react";
import "./carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiGetCarousel } from '../../services/carousel'
import { Link } from "react-router-dom";
import { formatVietnameseToString } from "../../utils/common/formatVietnameseToString";

/* eslint-disable react/prop-types */



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "15px",
        width: "auto",
        height: "auto",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "1",
        left: "15px",
        width: "auto",
        height: "auto",
      }}
      onClick={onClick}
    />
  );
}

const OwlCarouselComponent = () => {
  const [carousel, getCarousel] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetCarousel()
      // console.log("response from category", response);
      if (response?.data.err === 0) {
        getCarousel(response.data.response)
      }
    }
    fetchCategories()
  }, [])



  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
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
          {carousel?.length > 0 && carousel.map((item) => {
            return(
              <div className="card" key={item.story_id}>
                <div className="book_avatar">
                  <Link to={`/story/${formatVietnameseToString(item.name)}/${item.story_id}`}>
                    <img
                      className="center"
                      src={item.image}
                      alt={item.name}
                    />
                  </Link>
                  <div className="top-notice">
                    <span className="time-ago">{item.timeSinceLastUpdate}</span>
                    <span className="type-label hot">Hot</span>
                  </div>
                </div>
                <div className="book_info">
                  <div className="book_name">
                    <h3 className="name">
                      <Link
                        title="Tinh Võ Thần Quyết"
                        to={`/story/${formatVietnameseToString(item.name)}/${item.story_id}`}
                      >
                        {item.name}
                      </Link>
                    </h3>
                  </div>
                  <div className="last_chapter">
                    <Link to={`/story/${formatVietnameseToString(item.name)}/${item.story_id}`}>
                      Chương {item.chapter_count}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}


        

        
      </Slider>
    </div>
  );
};

export default OwlCarouselComponent;
