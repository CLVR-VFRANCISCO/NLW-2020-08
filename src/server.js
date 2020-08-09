//INITIAL SERVER SETTINGS
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//TEMPLATE ENGINE SETTINGS - NUNJUCKS
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// SEVER SETTINGS
server
// DATA FROM REQ.BODY
.use(express.urlencoded({ extended: true }))
// STATIC FILE SETTINGS (CSS, IMAGES, SCRIPTS)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//START SERVER
.listen(5500)