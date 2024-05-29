import "./list-chapter.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatVietnameseToString } from "../../utils/common/formatVietnameseToString";

const ListChapterComponent = ({ story }) => {
  const chapters = useSelector((state) => state?.story?.chapters);
  // console.log("chapters", chapters);
  // console.log("totalChapters", chapters.totalChapters);
  if (!story) return null;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("vi-VN", options);
  };

  return (
    <div className="chapter-container">
      <h3>
        <i className="fa fa-database" aria-hidden="true"></i>
        Danh sách chương
      </h3>
      <div className="list-chapter">
        {chapters?.chapters?.map((chapter, index) => (
          <div className="chapter-item" key={chapter.chapter_id}>
            <div className="chapter-content">
              <div className="name-chap">
                <Link
                  to={`/story/${formatVietnameseToString(story.name)}/${story.story_id}/chap/${chapter.chapter_id}?number=${chapters.chapters.length - index}`}
                >
                  Chương {chapters.chapters.length - index}
                </Link>
              </div>
              <div className="time-chap">{formatDate(chapter.createdAt)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListChapterComponent;
