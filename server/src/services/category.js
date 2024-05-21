import db from "../models/index"

// get all category


export const getGenreService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Category.findAll({
            raw: true,
            attributes: ['id', 'category_id', 'name']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get categories",
            response

        })
    } catch (error) {
        reject(error)
    }
})