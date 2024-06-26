import express from "express";
import {SignUpAndLoginController} from "./controller/SignUpAndLoginController.js";
import {BlogController} from "./controller/BlogController.js";
import {ModelGeneratorController} from "./controller/ModelGeneratorController.js";
import {APIGeneratorController} from "./controller/APIGeneratorController.js";
const myRouter = express.Router()
myRouter.post('/sign-up', SignUpAndLoginController.sign_up)
myRouter.post('/login', SignUpAndLoginController.login)
myRouter.post('/generate_model_express', ModelGeneratorController.generateExpressModel);
myRouter.post('/generate_model_django', ModelGeneratorController.generateDjangoModel);
myRouter.post('/generate_api', APIGeneratorController.generateGPT3Response);
myRouter.post('/download1', ModelGeneratorController.downloadModel)
export default myRouter;