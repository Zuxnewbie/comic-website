import express from "express"
import * as controllers from '../controllers/story'

const router = express.Router()

const carousel = router.get("/", controllers.getCardCarousel)
const allStory = router.get("/all", controllers.getAllComic)
const allChap = router.get("/getallchap", controllers.getAllChap)
const banner = router.get("/getbanner", controllers.getBanner)
const storyLimit = router.get("/limit", controllers.getAllComicLimit)

export {carousel, allStory, allChap, banner, storyLimit}