const express = require('express')
const path = require("path")
const exphbs = requiere('express-handlebars')
const morgan = require('morgan')

const app = express()

//setings
app.set('port', process.env.PORT|| 3000)
app.set('views', path.join(__dirname,'views'))
app.engine('.hbs',exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
}).engine
)
app.set('view engine','.hbs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}))

//RUTAS
app.use(require('.routes/index'))

//Archivos estaticos
app.use('public', express.static(path.join(__dirname, 'public')))
module.exports = app