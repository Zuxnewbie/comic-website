import "./story.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStoryByID } from "../../store/actions/story";
import CardStoryComponent from "../../components/card-story/card-story";
import ListChapterComponent from "../../components/list-chapter/list-chapter";
import { getChapterByStoryID } from "../../store/actions/story"
const StoryDetail = () => {
  const { story_id } = useParams();
  const dispatch = useDispatch();
  const story = useSelector((state) => state.story.story);
  
  // console.log("story of selector", story); // Debugging line
  // console.log("URL Params:", useParams()); // Debugging line
  // console.log("story_idd:", story_id); // Debugging line

  useEffect(() => {
    if (story_id) {
      dispatch(getStoryByID(story_id));
      dispatch(getChapterByStoryID(story_id));
    }
  }, [story_id, dispatch]);

  return (
    <div className="home-hero">
      <div className="main-homepage">
        {story ? (
          <>
            <CardStoryComponent story={story} />
            <ListChapterComponent story={story} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default StoryDetail;
