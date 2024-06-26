import express from 'express'
import myRouter from './myRouter.js'
import cors from 'cors'
import dotenv from 'dotenv'
import {connect_database} from "./config/connect_database.js";
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(myRouter)

connect_database()
const PORT = 1235;

app.listen(PORT, () => {
    console.log('app listening on port ' + PORT)
})