import db from "../models/index";
import { Sequelize } from "sequelize";
import QueryTypes from "sequelize";

//get 5 banner 
export const getBannerService = () => new Promise(async (resolve, reject) => {
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
            limit: 5,
            order: [[Sequelize.literal('lastUpdated'), 'DESC']],
            // raw: true
        });

        resolve({
            err: response.length ? 0 : 1,
            msg: response.length ? "OK" : "Failed to get Banner ",
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
            raw: true,
            nest: true
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


export const getAllComicLimitService = (offset) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAndCountAll({
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
            offset: offset * (+process.env.LIMIT) || 0,
            limit: +process.env.LIMIT,
            nest: true,
            order: [[Sequelize.literal('lastUpdated'), 'DESC']],
            raw: true
        });

        // const { rows, count } = response;

        // console.log(rows.length);

        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get comic limit",
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

export const getAllComicByCategoryLimitService = (cate) => {
    return new Promise(async (resolve, reject) => {
        try {
            const query = `
                SELECT 
                    Story.story_id, 
                    Story.name, 
                    Story.image, 
                    (SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = Story.story_id) AS chapter_count, 
                    (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id) AS lastUpdated,
                    CASE
                        WHEN TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' minutes ago')      
                        WHEN TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' hours ago')
                        WHEN TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 30 THEN CONCAT(TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' days ago')
                        ELSE CONCAT(TIMESTAMPDIFF(MONTH, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' months ago')
                    END AS timeSinceLastUpdate,
                    categories.category_id AS categories_category_id, 
                    categories.name AS categories_name, 
                    categories.description AS categories_description
                FROM 
                    Stories AS story 
                INNER JOIN 
                    (StoryCategories AS categories_StoryCategory 
                INNER JOIN 
                    Categories AS categories 
                ON 
                    categories.category_id = categories_StoryCategory.category_id) 
                ON 
                    story.story_id = categories_StoryCategory.story_id 
                WHERE 
                    categories.name = :cate;
            `;

            const stories = await db.sequelize.query(query, {
                replacements: { cate },
                type: QueryTypes.SELECT });

            resolve({
                err: stories.length ? 0 : 1,
                msg: stories.length ? 'OK' : 'Failed to get comic by category',
                stories
            });
        } catch (error) {
            reject({
                err: -1,
                msg: 'Failed at story controller =>>> ',
                error
            });
        }
    });
};


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


