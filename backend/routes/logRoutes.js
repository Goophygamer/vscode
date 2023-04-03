const express = require('express')
const router = express.Router()
const {getLogs,
    setLogs,
    updateLogs,
    deleteLogs,} = require('../controllers/logController')
router.route('/').get(getLogs).post(setLogs)
router.route('/:id').delete(deleteLogs).put(updateLogs)
module.exports = router 