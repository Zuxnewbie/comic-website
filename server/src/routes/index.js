import authRouter from "./auth.js";
import insertRouter from "./insert";
import categoryRouter from "./category.js";
import sort from "./sort";
import rank from "./rank";
import { carousel, allStory, allChap, banner, storyLimit, categoryDetail, storyDetail, chapterList, chapterDetail,notfull, full, nameAuthor, storyOfAuthor}  from "./story.js";
const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/carousel", carousel);
  app.use("/api/v1/story", allStory);
  app.use("/api/v1/chapter", allChap);  
  app.use("/api/v1/banner", banner);
  app.use("/api/v1/story", storyLimit);
  app.use("/api/v1/genre", categoryDetail);
  app.use("/api/v1/story", storyDetail);
  app.use("/api/v1/chapter", chapterList);
  app.use("/api/v1/chapter", chapterDetail);
  app.use("/api/v1/story", notfull);
  app.use("/api/v1/story", full);
  app.use("/api/v1/story", nameAuthor);
  app.use("/api/v1/story", storyOfAuthor);


  app.use("/api/v1/story-sort", sort);
  app.use("/api/v1/story-rank", rank);

  
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
