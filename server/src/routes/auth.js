import express from 'express'
import * as authController from '../controllers/auth.js'


const router = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

// router.get('/login', (req, res) => {
//     res.send("hello world")
// })


export default router