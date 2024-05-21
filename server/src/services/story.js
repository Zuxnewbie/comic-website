import db from "../models/index";
import { Sequelize } from "sequelize";

// Get all category
export const getCardCarouselService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            raw: true,
            attributes: [
                'story_id', 
                'name', 
                'image', 
                'view',
                [Sequelize.fn('COUNT', Sequelize.col('chapters.chapter_id')), 'chapter_count']
            ],
            limit: 12,
            order: [['view', 'DESC']],
            include: [
                {
                    model: db.Chapter,
                    attributes: [],
                    as: 'chapters'
                }
            ],
            group: ['Story.story_id'],
            subQuery: false // Disable subquery usage
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
