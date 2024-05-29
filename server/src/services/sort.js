import db from "../models/index"


export const getStoryByViewASCService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['view', 'ASC']], 
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


export const getStoryByViewDESCService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['view', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewDESC",
            response

        })
    } catch (error) {
        reject(error)
    }
})


export const getStoryByCreatedDESCService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['createdAt', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewDESC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

export const getStoryByCreatedASCService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['createdAt', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewDESC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

export const getStoryByUpdatedDESCService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['updatedAt', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewDESC",
            response

        })
    } catch (error) {
        reject(error)
    }
})

export const getStoryByUpdatedASCService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Story.findAll({
            order: [['updatedAt', 'DESC']], 
            raw: true,
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "OK" : "Failed to get getStoryByViewDESC",
            response

        })
    } catch (error) {
        reject(error)
    }
})