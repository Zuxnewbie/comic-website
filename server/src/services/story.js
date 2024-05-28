import db from "../models/index";
import { Sequelize } from "sequelize";
import QueryTypes from "sequelize";

//get 5 banner
export const getBannerService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Story.findAll({
        attributes: [
          "story_id",
          "name",
          "image",
          [
            Sequelize.literal(
              "(SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = Story.story_id)"
            ),
            "chapter_count",
          ],
          [
            Sequelize.literal(`
                    (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id)
                `),
            "lastUpdated",
          ],
          [
            Sequelize.literal(`
                    CASE
                        WHEN TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' minutes ago')
                        WHEN TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' hours ago')
                        WHEN TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 30 THEN CONCAT(TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' days ago')
                        ELSE CONCAT(TIMESTAMPDIFF(MONTH, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' months ago')
                    END
                `),
            "timeSinceLastUpdate",
          ],
        ],
        limit: 5,
        order: [[Sequelize.literal("lastUpdated"), "DESC"]],
        // raw: true
      });

      resolve({
        err: response.length ? 0 : 1,
        msg: response.length ? "OK" : "Failed to get Banner ",
        response,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

// Get all category
export const getCardCarouselService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Story.findAll({
        attributes: [
          "story_id",
          "name",
          "image",
          "view",
          [
            Sequelize.literal(
              "(SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = Story.story_id)"
            ),
            "chapter_count",
          ],
        ],
        limit: 12,
        order: [["view", "DESC"]],
        group: ["Story.story_id"],
      });

      resolve({
        err: response.length ? 0 : 1,
        msg: response.length ? "OK" : "Failed to get card carousel",
        response,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

// / Service for getting all comics
export const getAllComicService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Story.findAll({
        attributes: [
          "story_id",
          "name",
          "image",
          [
            Sequelize.literal(
              "(SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = Story.story_id)"
            ),
            "chapter_count",
          ],
          [
            Sequelize.literal(`
                    (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id)
                `),
            "lastUpdated",
          ],
          [
            Sequelize.literal(`
                    CASE
                        WHEN TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' minutes ago')
                        WHEN TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' hours ago')
                        WHEN TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 30 THEN CONCAT(TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' days ago')
                        ELSE CONCAT(TIMESTAMPDIFF(MONTH, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' months ago')
                    END
                `),
            "timeSinceLastUpdate",
          ],
        ],
        limit: 30,
        order: [[Sequelize.literal("lastUpdated"), "DESC"]],
        raw: true,
        nest: true,
      });

      resolve({
        err: response.length ? 0 : 1,
        msg: response.length ? "OK" : "Failed to get all comic",
        response,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getAllComicLimitService = (offset) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Story.findAndCountAll({
        attributes: [
          "story_id",
          "name",
          "image",
          [
            Sequelize.literal(
              "(SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = Story.story_id)"
            ),
            "chapter_count",
          ],
          [
            Sequelize.literal(`
                    (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id)
                `),
            "lastUpdated",
          ],
          [
            Sequelize.literal(`
                    CASE
                        WHEN TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' minutes ago')
                        WHEN TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' hours ago')
                        WHEN TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()) < 30 THEN CONCAT(TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' days ago')
                        ELSE CONCAT(TIMESTAMPDIFF(MONTH, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = Story.story_id), NOW()), ' months ago')
                    END
                `),
            "timeSinceLastUpdate",
          ],
        ],
        offset: offset * +process.env.LIMIT || 0,
        limit: +process.env.LIMIT,
        nest: true,
        order: [[Sequelize.literal("lastUpdated"), "DESC"]],
        raw: true,
      });

      // const { rows, count } = response;

      // console.log(rows.length);

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get comic limit",
        response,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getAllComicByCategoryLimitService = (cate) => {
  return new Promise(async (resolve, reject) => {
    try {
      const query = `
      SELECT DISTINCT 
      story.story_id, 
      story.name, 
      story.image, 
      (SELECT COUNT(*) FROM Chapters WHERE Chapters.story_id = story.story_id) AS chapter_count, 
      (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id) AS lastUpdated,
      CASE
          WHEN TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id), NOW()) < 60 THEN CONCAT(TIMESTAMPDIFF(MINUTE, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id), NOW()), ' minutes ago')      
          WHEN TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id), NOW()) < 24 THEN CONCAT(TIMESTAMPDIFF(HOUR, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id), NOW()), ' hours ago')
          WHEN TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id), NOW()) < 30 THEN CONCAT(TIMESTAMPDIFF(DAY, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id), NOW()), ' days ago')
          ELSE CONCAT(TIMESTAMPDIFF(MONTH, (SELECT MAX(updatedAt) FROM Chapters WHERE Chapters.story_id = story.story_id), NOW()), ' months ago')
      END AS timeSinceLastUpdate,
      categories.category_id AS categories_category_id, 
      categories.name AS categories_name, 
      categories.description AS categories_description
  FROM 
      Stories AS story 
  INNER JOIN 
      StoryCategories AS categories_StoryCategory 
      ON story.story_id = categories_StoryCategory.story_id 
  INNER JOIN 
      Categories AS categories 
      ON categories.category_id = categories_StoryCategory.category_id 
  WHERE 
      categories.name = :cate limit 5

  `;

      const result = await db.sequelize.query(query, {
        replacements: { cate },
        type: QueryTypes.SELECT,
      });
      const response = result.flat();

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get comic by category",
        response,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });
};

export const getAllChapterService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Chapter.findAll({
        raw: true,
        nest: true,
        include: [
          {
            model: db.Story,
            as: "story",
            attributes: ["story_id", "name", "image"],
          },
        ],
        attributes: ["chapter_id", "story_id", "content"],
      });

      resolve({
        err: response.length ? 0 : 1,
        msg: response.length ? "OK" : "Failed to get all chapter",
        response,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getComicByIdService = (storyId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Story.findOne({
        where: {
          story_id: storyId || 0,
        },
      });
      console.log("storyId0000", storyId);

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get comic by id",
        response, // Resolve with 'story' instead of 'response'
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getChapterByComicIdService = (storyId) =>
  new Promise(async (resolve, reject) => {
    try {
      const chapters = await db.Chapter.findAll({
        where: {
          story_id: storyId,
        },
      });
      // console.log("chapter list: ", chapters);

      resolve({
        err: chapters.length ? 0 : 1,
        msg: chapters.length ? "OK" : "Failed to get chapters by storyId",
        chapters,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at chapter controller =>>> ",
        error,
      });
    }
  });

export const getChapterDetailByIdService = (chapterId) =>
  new Promise(async (resolve, reject) => {
    try {
      const chapter = await db.Chapter.findOne({
        where: {
          chapter_id: chapterId,
        },
      });

      resolve({
        err: chapter ? 0 : 1,
        msg: chapter ? "OK" : "Failed to get chapter detail by chapterId",
        chapter,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at chapter controller =>>> ",
        error,
      });
    }
  });

export const getStoriesByStatusService = (status) =>
  new Promise(async (resolve, reject) => {
    try {
      const stories = await db.Story.findAll({
        where: {
          status: status,
        },
      });

      resolve({
        err: stories.length ? 0 : 1,
        msg: stories.length ? "OK" : `No stories found with status ${status}`,
        stories,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getStoriesByStatusFullService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const stories = await db.Story.findAll({
        where: {
          status: "Full",
        },
      });

      resolve({
        err: stories.length ? 0 : 1,
        msg: stories.length ? "OK" : "No stories found with status 'Full'",
        stories,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getAuthorService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const stories = await db.Story.findAll({
        where: {
          status: "Full",
        },
      });

      resolve({
        err: stories.length ? 0 : 1,
        msg: stories.length ? "OK" : "No stories found with status 'Full'",
        stories,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getAuthorByStoryIdService = (storyId) =>
  new Promise(async (resolve, reject) => {
    try {
      const story = await db.Story.findOne({
        where: { story_id: storyId },
        include: {
          model: db.Author,
          as: "author",
          attributes: ["name"],
        },
      });

      resolve({
        err: story ? 0 : 1,
        msg: story ? "OK" : "Story or author not found",
        story,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });

export const getStoriesByAuthorIdService = (authorId) =>
  new Promise(async (resolve, reject) => {
    try {
      const stories = await db.Story.findAll({
        where: { author_id: authorId },
        // attributes: ['story_id', 'name', 'image', 'love', 'view', 'status', 'follow', 'description'],
        include: {
          model: db.Author,
          as: "author",
          attributes: ["name"],
        },
      });

      resolve({
        err: stories.length ? 0 : 1,
        msg: stories.length ? "OK" : "No stories found for this author",
        stories,
      });
    } catch (error) {
      reject({
        err: -1,
        msg: "Failed at story controller =>>> ",
        error,
      });
    }
  });
