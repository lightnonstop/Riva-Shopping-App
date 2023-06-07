const express = require('express');
const { createColor, updateColor, removeColor, getColor, getAllColors } = require('../controller/colorControl');
const { authVerify, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authVerify, isAdmin, createColor);
router.put('/:id', authVerify, isAdmin, updateColor);
router.delete('/:id', authVerify, isAdmin, removeColor);
router.get('/:id', getColor);
router.get('/', getAllColors);

module.exports = router;