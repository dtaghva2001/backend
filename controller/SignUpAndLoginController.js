import {User} from "../model/User.js";

async function isNewUser(email, username) {
    const user1 = await User.findOne({email: email})
    const user2 = await User.findOne({username: username})
    return user1 === null && user2 === null

}

export const SignUpAndLoginController = {
    sign_up: async (req, res) => {
        const {username, email, password} = req.body;
        console.log('begin of the register process')
        if(!(await isNewUser(email)))
        {
            console.log('failed register')
            res.status(404).json({'result': 'duplicated register'})
            return;
        }
        console.log('creating the new user...')
        const user = new User({username, email, password})
        await user.save()
        console.log('creating the user in db completed')
        res.status(200).json({'result': 'successful response'})
    },
    login: async (req, res) => {
        const {username, email, password} = req.body;
        const user = await User.findOne({'email': email})
        const userPassword = user.password
        console.log(`user password=${userPassword}`)
    }

}