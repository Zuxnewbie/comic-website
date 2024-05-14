import CardComicComponent from "../card-comic/card-comic";
import CommentComponent from "../comment/comment";
import ListChapterComponent from "../list-chapter/list-chapter";
import "./comic.scss";

const Comic = () => {
  return (
    <>
      <div className="comic-detail">
        <CardComicComponent />

        <ListChapterComponent />

        <CommentComponent />
      </div>
    </>
  );
};

export default Comic;
