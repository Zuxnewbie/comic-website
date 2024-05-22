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






// / Service for getting all comics
export const getAllComicService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            attributes: [
                "story_id", 
                "name", 
                "image",
                [Sequelize.literal('(SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = Story.story_id)'), 'chapter_count'],
                [Sequelize.literal(`
                    (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id)
                `), 'lastUpdated'],
                [Sequelize.literal(`
                    CASE
                        WHEN TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' minutes ago')
                        WHEN TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' hours ago')
                        WHEN TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 30 THEN CONCAT(TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' days ago')
                        ELSE CONCAT(TIMESTAMPDIFF(MONTH, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' months ago')
                    END
                `), 'timeSinceLastUpdate']
            ],
            limit: 30,
            order: [[Sequelize.literal('lastUpdated'), 'DESC']],
            raw: true
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



export const getAllChapterService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Chapter.findAll({
            raw:true,
            nest: true,
            include: [
                {model: db.Story, as: "story", attributes: ["story_id", "name", "image"]}
            ],
            attributes:["chapter_id", "story_id", "content"]
        });

        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? "OK" : "Failed to get all chapter",
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