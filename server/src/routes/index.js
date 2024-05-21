import authRouter from "./auth.js";
import insertRouter from "./insert";
import categoryRouter from "./category.js";
import { carousel, allStory}  from "./story.js";
const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/carousel", carousel);
  app.use("/api/v1/story", allStory);

  
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

export default initRoutes;
