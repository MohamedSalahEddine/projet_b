const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))

const index_router = require('./routers/index')
app.use('/', index_router)

const log_in_router = require('./routers/login')
app.use('/login', log_in_router)

const sign_up_router = require('./routers/signup')
app.use('/signup', sign_up_router)

const users_router = require('./routers/users')
app.use('/users', users_router)


app.listen(3000, ()=> console.log('server started'))