import * as services from "../services/story"

export const getAllStory = async (req, res) => {
    try {
        const response = await services.getAllStoryService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at story controller =>>> ", error
        })
    }
}

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
        console.log("papapgappga", response);
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
        console.log("res pons  se", response);
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


export const getComicById = async (req, res) => {
    const { story_id } = req.query; 

    try {
        const response = await services.getComicByIdService(story_id);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getComicById:", error);
        return res.status(500).json({
            err: -1,
            msg: "Failed to get comic by id",
            error: error.message
        });
    }
};


export const getChapterByComicId = async (req, res) => {
    const { story_id } = req.query;

    try {
        const response = await services.getChapterByComicIdService(story_id);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getChaptersByStoryId:", error);
        return res.status(500).json({
            err: -1,
            msg: "Failed to get chapters by story id",
            error: error.message
        });
    }
};



export const getChapterDetailById = async (req, res) => {
    const { chapter_id } = req.query;

    try {
        const response = await services.getChapterDetailByIdService(chapter_id);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getChapterDetailById:", error);
        return res.status(500).json({
            err: -1,
            msg: "Failed to get chapter detail by chapter id",
            error: error.message
        });
    }
};


export const getStoriesByStatusNotFull = async (req, res) => {
    const status = "Đang ra";  // Set the status to "Đang ra"

    try {
        const response = await services.getStoriesByStatusService(status);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getStoriesByStatus:", error);
        return res.status(500).json({
            err: -1,
            msg: "Failed to get stories by status",
            error: error.message
        });
    }
};


export const getStoriesByStatusFull = async (req, res) => {
    const status = "Full";  // Set the status to "Đang ra"

    try {
        const response = await services.getStoriesByStatusFullService(status);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getStoriesByStatusFull:", error);
        return res.status(500).json({
            err: -1,
            msg: "Failed to get stories by status 'Full'",
            error: error.message
        });
    }
};

export const getAuthorByStoryId = async (req, res) => {
    const { story_id } = req.query;

    try {
        const response = await services.getAuthorByStoryIdService(story_id);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getAuthorByStoryId:", error);
        return res.status(500).json({
            err: -1,
            msg: "Failed to get author by story id",
            error: error.message
        });
    }
};

export const getStoriesByAuthorId = async (req, res) => {
    const { author_id } = req.query;

    try {
        const response = await services.getStoriesByAuthorIdService(author_id);
        return res.status(200).json(response);
    } catch (error) {
        console.error("Error in getStoriesByAuthorId:", error);
        return res.status(500).json({
            err: -1,
            msg: "Failed to get stories by author id",
            error: error.message
        });
    }
};