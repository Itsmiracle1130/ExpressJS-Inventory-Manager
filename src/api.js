// import modules
const express = require('express')
const router = require('./router/router.js')
const port = 3002
const app = express()

app.use(express.json())


app.use('/v1/', router)

app.get('/', (req, res) => {
    res.send('Home page')
})


app.use((req, res) => {
    res.status(404).send('Page not found')
})

app.listen(port, () => {
    console.log(`Server running at hhtps://localhost:${port}`)
})
