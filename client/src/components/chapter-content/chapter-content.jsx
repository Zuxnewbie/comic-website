import "./chapter-content.scss";
import { IoSettingsOutline } from "react-icons/io5";

const ChapterContent = ({chapterDetail, chapterNumber}) => {
  return (
    <>
      <div className="chapter-detail-container">
        <div className="page-in">
          <div className="title">
            <h1 className="headline">
              <br />
              <span className="chapter-title">Chapter {chapterNumber}</span>
            </h1>
            <button className="control-action-btn" type="button">
              <IoSettingsOutline className="icon" />
            </button>
          </div>
          <div className="chap-details">
            <p style={{whiteSpace: "pre-line"}}>
              {chapterDetail.content}
            </p>
          </div>
        </div>
        <div className="chapternav">
          <div className="chapter-control"> 
            <a className="button prevchap" href="/" title="Chapter 1">
              <i className="fa fa-arrow-left"></i>
              <span className="prev">Chap trước</span>
            </a>
            <a className="button nextchap" href="/" title="Chapter 3">
              <span className="next">Chap sau</span>
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterContent;
