const express = require('express');
const { prodCreateCategory, prodUpdateCategory, prodRemoveCategory, prodGetCategory, prodGetAllCategories } = require('../controller/prodCategoryControl');
const { authVerify, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authVerify, isAdmin, prodCreateCategory);
router.put('/:id', authVerify, isAdmin, prodUpdateCategory);
router.delete('/:id', authVerify, isAdmin, prodRemoveCategory);
router.get('/:id', prodGetCategory);
router.get('/', prodGetAllCategories);

module.exports = router;