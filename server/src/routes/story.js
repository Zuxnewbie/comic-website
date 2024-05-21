import express from "express"
import * as controllers from '../controllers/story'

const router = express.Router()

const carousel = router.get("/", controllers.getCardCarousel)
const allStory = router.get("/all", controllers.getAllComic)


export {carousel, allStory}