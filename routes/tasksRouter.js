const express = require('express')
const router = express.Router()

const TaskController = require("../controllers/tasksController.js")

router.get('/', TaskController.findAllTasks)
router.get('/:id', TaskController.findTaskById)
router.post('/', TaskController.createTask)

module.exports = router