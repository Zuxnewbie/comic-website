import { Link, useLocation } from "react-router-dom";
import "./chapter-content.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const ChapterContent = ({ chapterDetail, chapterNumber, totalChapters, chapters }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [nextChapterId, setNextChapterId] = useState(null);
  const [prevChapterId, setPrevChapterId] = useState(null);

  useEffect(() => {
    if (chapters?.length > 0 && chapterDetail) {
      const currentChapterId = chapterDetail?.chapter_id;
      setNextChapterId(getNextChapterId(currentChapterId, chapters));
      setPrevChapterId(getPrevChapterId(currentChapterId, chapters));
    }
  }, [chapters, chapterDetail]);

  const getNextChapterId = (chapterId, chap) => {
    const currentIndex = chap?.findIndex(chapter => chapter?.chapter_id === chapterId);
    if (currentIndex > 0) {
      return chap[currentIndex - 1]?.chapter_id;
    } else {
      return null; // Không có chapter sau
    }
  };

  const getPrevChapterId = (chapterId, chap) => {
    const currentIndex = chap?.findIndex(chapter => chapter?.chapter_id === chapterId);
    if (currentIndex < chap?.length - 1) {
      return chap[currentIndex + 1]?.chapter_id;
    } else {
      return null; // Không có chapter trước
    }
  };

  const generateLink = (chapterId, chapterNumber) => {
    if (!chapterId || !chapterNumber) return "#";
    const baseUrl = currentPath.split("/chap/")[0];
    return `${baseUrl}/chap/${chapterId}?number=${chapterNumber}`;
  };

  const chapterNumberInt = parseInt(chapterNumber, 10);

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
            <p style={{ whiteSpace: "pre-line" }}>
              {chapterDetail.content}
            </p>
          </div>
        </div>
        <div className="chapternav">
          <div className="chapter-control">
            {prevChapterId ? (
              <Link className="button prevchap" to={generateLink(prevChapterId, chapterNumberInt - 1)}>
                <i className="fa fa-arrow-left"></i>
                <span className="prev">Chap trước</span>
              </Link>
            ) : (
              <div className="button prevchap disabled">
                <i className="fa fa-arrow-left"></i>
                <span className="prev">Chap trước</span>
              </div>
            )}
            {nextChapterId ? (
              <Link className="button nextchap" to={generateLink(nextChapterId, chapterNumberInt + 1)}>
                <span className="next">Chap sau</span>
                <i className="fa fa-arrow-right"></i>
              </Link>
            ) : (
              <div className="button nextchap disabled">
                <span className="next">Chap sau</span>
                <i className="fa fa-arrow-right"></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterContent;
