import express from "express"
import * as controllers from '../controllers/story'

const router = express.Router()

const carousel = router.get("/", controllers.getCardCarousel)
const allStory = router.get("/all", controllers.getAllComic)
const allChap = router.get("/getallchap", controllers.getAllChap)
const banner = router.get("/getbanner", controllers.getBanner)
const storyLimit = router.get("/limit", controllers.getAllComicLimit)
const categoryDetail = router.get("/detail", controllers.getComicByCategory)
const storyDetail = router.get("/detail-test", controllers.getComicById)
const chapterList = router.get("/chapter-list", controllers.getChapterByComicId)
const chapterDetail = router.get("/chapter-detail", controllers.getChapterDetailById);
const notfull = router.get("/status-not-full", controllers.getStoriesByStatusNotFull);
const full = router.get("/status-full", controllers.getStoriesByStatusFull);
const nameAuthor = router.get("/name-author", controllers.getAuthorByStoryId);
const storyOfAuthor = router.get("/story-of-author", controllers.getStoriesByAuthorId);


export {carousel, allStory, allChap, banner, storyLimit, categoryDetail, storyDetail, chapterList, chapterDetail, notfull, full, nameAuthor, storyOfAuthor}