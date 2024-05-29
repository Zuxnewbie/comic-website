import db from "../models/index"


export const getStoryByTopDayService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewASC",
            response

        })
    } catch (error) {
        reject(error)
    }
})


export const getStoryByTopWeekService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewASC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

export const getStoryByTopMonthService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewASC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

//go here first
export const getStoryByTopLoveService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['love', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewASC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

export const getStoryByTopNewService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['updatedAt', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewASC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

export const getStoryByTopFullService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            where: {
                status: 'Full'
            },
            order: [['updatedAt', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewASC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

export const getStoryByTopRandomService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: db.sequelize.random(), 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewASC",
            response

        })
    } catch (error) {
        reject(error)
    }
})