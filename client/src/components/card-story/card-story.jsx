import { Link } from "react-router-dom";
import "./card-story.scss";
import { formatVietnameseToString } from "../../utils/common/formatVietnameseToString";

function CardStoryComponent({ story }) {
  if (!story) return null;

  return (
    <>
      <ol className="breadcrumb">
        <li>
          <a href="/">
            <span>Trang Chủ</span>
          </a>
        </li>
        <li>
          <Link to={`/detail/${formatVietnameseToString(story.name)}/${story.story_id}`}>
            <span>{story.name}</span>
          </Link>
        </li>
      </ol>

      <div className="comic-content">
        <div className="book-avatar">
          <img
            alt={story.name}
            src={story.image}
          />
        </div>
        <div className="book-other">
          <h1>{story.name}</h1>
          <div className="txt">
            <ul className="list-info">
              <li className="author row">
                <p className="name col">
                  <i className="fa fa-user"></i> Tác giả
                </p>
                <p className="">{story.author || 'Đang Cập Nhật'}</p>
              </li>
              <li className="status row">
                <p className="name col">
                  <i className="fa fa-rss"></i> Tình trạng
                </p>
                <p className="">{story.status || 'Đang Cập Nhật'}</p>
              </li>
              <li className="row">
                <p className="name col">
                  <i className="fa fa-thumbs-up"></i> Lượt thích
                </p>
                <p className="number-like">{story.love}</p>
              </li>
              <li className="row">
                <p className="name col">
                  <i className="fa fa-heart"></i> Lượt theo dõi
                </p>
                <p className="">{story.follow}</p>
              </li>
              <li className="row">
                <p className="name col">
                  <i className="fa fa-eye"></i> Lượt xem
                </p>
                <p className="">{story.view}</p>
              </li>
            </ul>
          </div>

          <ul className="list-genres">
            {story.genres?.map((genre, index) => (
              <li key={index} className="li03">
                <a href={`/genre/${genre}`}>
                  {genre}
                </a>
              </li>
            ))}
          </ul>
          <ul className="story-detail-menu">
            <li className="li01">
              <Link
                to={`/story/${formatVietnameseToString(story.name)}/${story.story_id}/chap/${story.firstChapter.chapter_id}`}
                className="button is-danger"
              >
                <i className="fa fa-book"></i> Đọc từ đầu
              </Link>
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
                data-id={story.story_id}
              >
                <i className="fa fa-thumbs-up"></i> Thích
              </a>
            </li>
            <li className="li04">
              <Link
               to={"/"}
                className="button is-info is-rounded"
              >
                <i className="fa fa-location-arrow" aria-hidden="true"></i> Đọc
                tiếp
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="description">
        <h3>
          <i className="fa fa-info-circle"></i> Giới thiệu
        </h3>
        <div className="description-content">
          <p>{story.description}</p>
        </div>
      </div>
    </>
  );
}

export default CardStoryComponent;
