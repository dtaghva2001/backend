import express from 'express'
import myRouter from './myRouter.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(myRouter)
const PORT = 1234;


app.listen(PORT, () => {
    console.log('app listening on port ' + PORT)
})