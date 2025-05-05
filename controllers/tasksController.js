const Task = require('../models/task.js')

const createTask = async (req, res) => {
  const newTask = await Task.create(req.body)
  res.send(newTask)
}

const findAllTasks = async (req, res) => {
  const tasks = await Task.find({})
  res.send(tasks)
}

const findTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id)
  res.send(task)
}

module.exports = {
  createTask,
  findAllTasks,
  findTaskById
}
