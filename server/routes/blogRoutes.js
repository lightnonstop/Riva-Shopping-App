const express = require('express');
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require('../controller/blogControl');
const { authVerify, isAdmin } = require('../middlewares/authMiddleware');
const { blogImageResize, uploadPhoto } = require('../middlewares/uploadImages');
const router = express.Router();

router.post('/', authVerify, isAdmin, createBlog);
router.put('/likes', authVerify, likeBlog);
router.put('/dislikes', authVerify, dislikeBlog);
router.put('/upload/:id', authVerify, isAdmin, uploadPhoto.array('images', 2), blogImageResize, uploadImages);
router.put('/:id', authVerify, isAdmin, updateBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/:id', authVerify, isAdmin, deleteBlog);

module.exports = router;