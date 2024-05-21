import express from "express"
import * as controllers from '../controllers/story'

const router = express.Router()

router.get("/", controllers.getCardCarousel)

export default router