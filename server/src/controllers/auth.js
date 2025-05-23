import * as authService from '../services/auth.js'

export const register = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await authService.registerService(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(400).json({
            err: 1,
            msg: 'Missing inputs !'
        })
        const response = await authService.loginService(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at auth controller: ' + error
        })
    }
}