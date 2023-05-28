const express = require('express');
const { blogCreateCategory, blogUpdateCategory, blogRemoveCategory, blogGetCategory, blogGetAllCategories } = require('../controller/blogCategoryControl');
const { authVerify, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authVerify, isAdmin, blogCreateCategory);
router.put('/:id', authVerify, isAdmin, blogUpdateCategory);
router.delete('/:id', authVerify, isAdmin, blogRemoveCategory);
router.get('/:id', blogGetCategory);
router.get('/', blogGetAllCategories);

module.exports = router;