const userServive = require('./users.services');

const router = require('express').Router()

router.get('/users', userServive.getAllUser)
router.post('/users', userServive.postUser)
router.get('/users/:id', userServive.getUserById)

module.exports = router;