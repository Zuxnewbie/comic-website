import authRouter from "./auth.js";
import insertRouter from "./insert";
import categoryRouter from "./category.js";
import { carousel, allStory, allChap, banner, storyLimit, categoryDetail}  from "./story.js";
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

  
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
