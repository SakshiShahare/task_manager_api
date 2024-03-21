const express = require('express');
const { getTask, getAllTask, createTask, deleteTask, updateTask } = require('../controllers/task');

const router = express.Router();

router.route('/').get(getAllTask).post(createTask);
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;