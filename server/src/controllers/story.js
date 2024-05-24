import * as services from "../services/story"


export const getBanner = async (req, res) => {
    try {
        const response = await services.getBannerService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at story controller =>>> ", error
        })
    }
}

export const getCardCarousel = async (req, res) => {
    try {
        const response = await services.getCardCarouselService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at story controller =>>> ", error
        })
    }
}

export const getAllComic = async (req, res) => {
    try {
        const response = await services.getAllComicService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at story controller =>>> ", error
        })
    }
}

export const getAllComicLimit = async (req, res) => {
    const { page } = req.query
    try {
        const response = await services.getAllComicLimitService(page)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at story controller =>>> ", error
        })
    }
}


export const getAllChap = async (req, res) => {
    try {
        const response = await services.getAllChapterService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at story controller =>>> ", error
        })
    }
}

export const getComicByCategory = async (req, res) => { 
    const { cate } = req.query 

    try {
        const response = await services.getAllComicByCategoryLimitService(cate);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getComicByCategory:", error); // Log the error for debugging
        return res.status(500).json({
            err: -1,
            msg: "Failed to get comics by category",
            error: error.message // Send the error message in the response
        });
    }
}