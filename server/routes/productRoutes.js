const express = require('express');
const { createProduct, getProduct, getAllProducts, updateProduct, removeProduct, addToWishlist, rating, uploadImages, deleteImages } = require('../controller/productControl');
const router = express.Router();
const { isAdmin, authVerify } = require('../middlewares/authMiddleware');
const { uploadPhoto, productImageResize } = require('../middlewares/uploadImages');




router.post('/', authVerify, isAdmin, createProduct);
router.put('/upload', authVerify, isAdmin, uploadPhoto.array('images', 10), productImageResize, uploadImages);
router.get('/:id', getProduct);
router.put('/wishlist', authVerify, addToWishlist);
router.put('/rating', authVerify, rating);
router.put('/:id', authVerify, isAdmin, updateProduct);
router.delete('/:id', authVerify, isAdmin, removeProduct);
router.delete('/delete-image/:id', authVerify, isAdmin, deleteImages);
router.get('/', getAllProducts);

module.exports = router;