import * as services from "../services/rank"

export const getStoryByTopDay = async (req, res) => {
    try {
        const response = await services.getStoryByTopDayService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByTopDay controller =>>> ", error
        })
    }
}

export const getStoryByTopWeek = async (req, res) => {
    try {
        const response = await services.getStoryByTopWeekService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByTopWeek controller =>>> ", error
        })
    }
}

export const getStoryByTopMonth = async (req, res) => {
    try {
        const response = await services.getStoryByTopMonthService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByTopMonth controller =>>> ", error
        })
    }
}

export const getStoryByTopLove = async (req, res) => {
    try {
        const response = await services.getStoryByTopLoveService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByTopLove controller =>>> ", error
        })
    }
}

export const getStoryByTopNew = async (req, res) => {
    try {
        const response = await services.getStoryByTopNewService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByTopNew controller =>>> ", error
        })
    }
}

export const getStoryByTopFull = async (req, res) => {
    try {
        const response = await services.getStoryByTopFullService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByTopFull controller =>>> ", error
        })
    }
}

export const getStoryByTopRandom = async (req, res) => {
    try {
        const response = await services.getStoryByTopRandomService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at getStoryByTopRandom controller =>>> ", error
        })
    }
}