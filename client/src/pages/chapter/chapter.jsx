import { useParams, useLocation } from "react-router-dom";
import ChapterContent from "../../components/chapter-content/chapter-content";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getChapterByStoryID, getChapterDetail } from "../../store/actions/story";

const ChapterPage = () => {
  const { story_id } = useParams();
  const { chapter_id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const chapterDetail = useSelector((state) => state.story.chapter_detail);
  const chapters = useSelector((state) => state?.story?.chapters);
  const topRef = useRef(null);
  const queryParams = new URLSearchParams(location.search);
  const chapterNumber = queryParams.get('number');

  useEffect(() => {
    if (chapter_id) {
      dispatch(getChapterDetail(chapter_id));
      topRef.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
    }
  }, [chapter_id, dispatch]);

  useEffect(() => {
    if (!chapters || chapters.length === 0) {
      dispatch(getChapterByStoryID(story_id));
    }
  }, [chapters, dispatch]);

  if (!chapterDetail || !chapters) return <p>Loading...</p>;

  return (
    <div ref={topRef}>
      <ChapterContent chapterDetail={chapterDetail} chapterNumber={chapterNumber} chapters={chapters.chapters} totalChapters={chapters.totalChapters} />
      {/* <CommentComponent /> */}
    </div>
  );
};

export default ChapterPage;
