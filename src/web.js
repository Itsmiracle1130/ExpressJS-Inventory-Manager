const express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')


const port = 3000

const app = express()

// app.use(bodyParser.json())

// app.use(express.static('public'))


const staticFilesPath = path.join(__dirname, "public")

app.get('/index.html', (req, res) => {
    res.status(200)
    res.sendFile(path.join(staticFilesPath, 'index.html'))
})


app.get('*', (req, res) => {
    res.status(404)
    res.sendFile(path.join(staticFilesPath, '404.html'))
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
