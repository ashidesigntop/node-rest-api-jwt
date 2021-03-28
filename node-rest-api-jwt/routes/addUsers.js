const express = require('express');
const router = express.Router();
const addUserController = require('../app/api/controllers/addUsers');
router.get('/', addUserController.getAll);
router.post('/', addUserController.create);
router.get('/:addUserId', addUserController.getById);
router.put('/:addUserId', addUserController.updateById);
router.delete('/:addUserId', addUserController.deleteById);
module.exports = router;