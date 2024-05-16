import express from "express";
import {SignUpAndLoginController} from "./controller/SignUpAndLoginController.js";
import {BlogController} from "./controller/BlogController.js";
import {ModelGeneratorController} from "./controller/ModelGeneratorController.js";

const router = express.Router()
router.post('/sign-up', SignUpAndLoginController.sign_up)
router.post('/login', SignUpAndLoginController.login)

router.post('/add_to_blog', BlogController.addPost)
router.put('/edit_blog_post', BlogController.editPost)
router.delete('/delete_post', BlogController.deletePost)
router.get('/all_blogs', BlogController.checkAllPosts)
router.post('/review_post', BlogController.reviewPost)

router.post('/generate_model_express', ModelGeneratorController.generateExpressModel)
router.post('/generate_model_django', ModelGeneratorController.generateDjangoModel)
router.post('/generate_model_php', ModelGeneratorController.generatePHPModel)