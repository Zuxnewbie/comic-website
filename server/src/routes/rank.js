import express from "express"
import * as controllers from '../controllers/rank'

const router = express.Router()

router.get("/top-day", controllers.getStoryByTopDay)
router.get("/top-week", controllers.getStoryByTopWeek)
router.get("/top-month", controllers.getStoryByTopMonth)
router.get("/top-love", controllers.getStoryByTopLove)
router.get("/top-new", controllers.getStoryByTopNew)
router.get("/top-full", controllers.getStoryByTopFull)
router.get("/top-random", controllers.getStoryByTopRandom)

export default router