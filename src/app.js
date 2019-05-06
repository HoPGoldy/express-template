import express from 'express'
let app = express()
// 引入post解析中间件
let bodyParser = require('body-parser')
let multer = require('multer')
let upload = multer()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(upload.array())

// 引入路由
import { HelloWorld } from './router'
app.use('/', HelloWorld)

app.listen(3000, () => {
    console.log('app start at port 3000')
})