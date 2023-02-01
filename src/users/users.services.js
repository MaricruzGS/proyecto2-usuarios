const userControllers = require('./users.controllers')

const getAllUser = (req, res) => {
     userControllers.findAllUser()
     .then((data) => {
        res.status(200).json(data)
     })
     .catch((error) => {
        res.status(400).json(error)
     })
}

const getUserById = (req, res) => {
    const id = Number(req.params.id) 
    userControllers.findUserById(id)
    .then ((data) => {
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(400).json({
                menssage: "Invalid ID"
            })
        }
    })
    .catch((error) => {
        res.status(400).json(error)
    })
}

const postUser = (req, res) => {
    const userObj = req.body
    userControllers.createNewUser(userObj)
    .then ((data) => {
        res.status(201).json(data)
    })
    .catch((error) => {
        res.status(400).json(error)
    })
}

module.exports = {
    getAllUser,
    getUserById,
    postUser
}