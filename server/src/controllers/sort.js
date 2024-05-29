import * as services from "../services/sort"

export const getStoryByViewASC = async (req, res) => {
    try {
        const response = await services.getStoryByViewASCService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByViewASC controller =>>> ", error
        })
    }
}

export const getStoryByViewDESC = async (req, res) => {
    try {
        const response = await services.getStoryByViewDESCService()
        // console.log("response", response);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByViewDESC controller =>>> ", error
        })
    }
}


export const getStoryByCreatedDESC = async (req, res) => {
    try {
        const response = await services.getStoryByCreatedDESCService()
        // console.log("response", response);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByCreatedDESC controller =>>> ", error
        })
    }
}

export const getStoryByCreatedASC = async (req, res) => {
    try {
        const response = await services.getStoryByCreatedASCService()
        // console.log("response", response);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByCreatedASC controller =>>> ", error
        })
    }
}

export const getStoryByUpdatedAtDESC = async (req, res) => {
    try {
        const response = await services.getStoryByUpdatedDESCService()
        // console.log("response", response);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByUpdatedAtDESC controller =>>> ", error
        })
    }
}

export const getStoryByUpdatedAtASC = async (req, res) => {
    try {
        const response = await services.getStoryByUpdatedASCService()
        // console.log("response", response);
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByUpdatedAtASC controller =>>> ", error
        })
    }
}