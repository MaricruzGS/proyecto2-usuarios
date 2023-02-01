const express = require('express')
const app = express()

const usersRouter = require('./users/users.router')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json
    ({
        menssage: "Server OK"
    })
});

app.use('/', usersRouter)

app.listen(9000, () => {
    console.log('Server started at: http://localhost:9000')
})

module.exports = app
