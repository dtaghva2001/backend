import express from 'express'

const app = express()
const PORT = 1234;
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(PORT, () => {
    console.log('app listening on port ' + PORT)
})