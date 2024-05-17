import express from "express";
import {SignUpAndLoginController} from "./controller/SignUpAndLoginController.js";
import {BlogController} from "./controller/BlogController.js";
import {ModelGeneratorController} from "./controller/ModelGeneratorController.js";

const myRouter = express.Router()
myRouter.post('/sign-up', SignUpAndLoginController.sign_up)
myRouter.post('/login', SignUpAndLoginController.login)

//todo these are the APIs that I'm not sure about
// router.post('/add_to_blog', BlogController.addPost)
// router.put('/edit_blog_post', BlogController.editPost)
// router.delete('/delete_post', BlogController.deletePost)
// router.get('/all_blogs', BlogController.checkAllPosts)
// router.post('/review_post', BlogController.reviewPost)

myRouter.post('/generate_model_express', ModelGeneratorController.generateExpressModel)
myRouter.post('/generate_model_django', ModelGeneratorController.generateDjangoModel)
myRouter.post('/generate_model_php', ModelGeneratorController.generatePHPModel)
export default myRouter;