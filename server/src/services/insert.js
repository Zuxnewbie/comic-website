import db from '../models'
import bcrypt from 'bcryptjs'
import { v4 } from 'uuid'
import haihuoc from '../../data/result_haihuoc.json'
import huyenhuyen from '../../data/result_huyenhuyen.json'
import khoahuyen from '../../data/result_khoahuyen.json'
import kiemhiep from '../../data/result_kiemhiep.json'
import lichsu from '../../data/result_lichsu.json'
import lightnovel from '../../data/result_lightnovel.json'
import linhdi from '../../data/result_linhdi.json'
import matthe from '../../data/result_matthe.json'
import ngontinh from '../../data/result_ngontinh.json'
import kiemhinuphuep from '../../data/result_nuphu.json'
import generateCode from '../utils/generateCode'
require('dotenv').config()
const dataBody = haihuoc.stories


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const insertService = () => new Promise(async (resolve, reject) => {
    try {
        for (const item of dataBody) {
            let storyId = generateCode(4) // Generate unique ID for the story
            let authorId = generateCode(4) // Assuming you generate unique IDs for authors
            let categoryId = generateCode(4) // Assuming you generate unique IDs for categories


            
            // Create author
            await db.Author.create({
                id: authorId,
                name: item?.story?.author,
                description: '',
            })

            // Loop through chapters and create them
            for (const chapter of item?.chapters || []) {
                let chapterId = generateCode(4); // Generate unique ID for the chapter
                // Create chapter
                await db.Chapter.create({
                    chapter_id: chapterId,
                    story_id: storyId, // Assign the correct story_id to the chapter
                    name: '', // You can add logic to set the chapter name if needed
                    content: chapter?.chapter_content || '', // Retrieve chapter content
                })
            }

            // Create story with association to chapter and other details
            await db.Story.create({
                story_id: storyId,
                image: item?.story?.image,
                name: item?.story?.title,
                status: item?.story?.status,
                view: item?.story?.view,
                // category_id: categoryId,
                author_id: authorId,
            })

            // Create category
            // await db.Category.create({  
            //     id: categoryId,
            //     name: item?.category_description?.category_name,
            //     description: item?.category_description?.description,
            // })

            // Add additional operations if needed (e.g., creating comments)
        }
        
        
        
        // await db.Category.create({  
        //     category_id: category_id,
        //     name: item?.category_description?.category_name,
        //     description: item?.category_description?.description,
        // })

        // await db.Comment.create({
        //     id: commentId,
        //     message: '',
        //     chapter_id, 
        //     userId,
        // })
        resolve('Done.')
    } catch (error) {
        console.log(error);
        reject(error)
    }
})
