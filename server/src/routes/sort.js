import express from "express"
import * as controllers from '../controllers/sort'

const router = express.Router()

router.get("/sort-view-desc", controllers.getStoryByViewDESC)
router.get("/sort-view-asc", controllers.getStoryByViewASC)
router.get("/sort-create-desc", controllers.getStoryByCreatedDESC)
router.get("/sort-create-asc", controllers.getStoryByCreatedASC)
router.get("/sort-update-desc", controllers.getStoryByUpdatedAtDESC)
router.get("/sort-update-asc", controllers.getStoryByUpdatedAtASC)

export default router