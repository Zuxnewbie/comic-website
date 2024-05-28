import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/home";
import { path } from "./utils/constanst";
import NewPage from "./pages/new/new";
import StoryDetail from "./pages/story/story";
import GenresPage from "./pages/genres/genres";
import ChapterPage from "./pages/chapter/chapter";

const Layout = () => {
  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<App />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewPage />}>
            <Route path={path.HOME__PAGE} element={<NewPage />} />
          </Route>
          <Route path="story/:name/:story_id" element={<StoryDetail />}/>
          <Route path="genre/:genre" element={<GenresPage />} />
          <Route
            path="story/:name/:story_id/chap/:chapter_id"
            element={<ChapterPage />}
          />
          
        </Route>
      </Routes>
    </>
  );
};

export default Layout;
