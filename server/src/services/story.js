import db from "../models/index";
import { Sequelize } from "sequelize";

// Get all category
export const getCardCarouselService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            attributes: [
                'story_id', 
                'name', 
                'image', 
                'view',
                [Sequelize.literal('(SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = Story.story_id)'), 'chapter_count']
            ],
            limit: 12,
            order: [['view', 'DESC']],
            group: ['Story.story_id'],
        });

        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? "OK" : "Failed to get card carousel",
            response
        });
    } catch (error) {
        reject({
            err: -1,
            msg: "Failed at story controller =>>> ",
            error
        });
    }
});






export const getAllComicService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            raw: true,
        });
        

        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? "OK" : "Failed to get all comic",
            response
        });
    } catch (error) {
        reject({
            err: -1,
            msg: "Failed at story controller =>>> ",
            error
        });
    }
});