const express = require('express');
const { createBrand, updateBrand, removeBrand, getBrand, getAllBrands } = require('../controller/brandControl');
const { authVerify, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authVerify, isAdmin, createBrand);
router.put('/:id', authVerify, isAdmin, updateBrand);
router.delete('/:id', authVerify, isAdmin, removeBrand);
router.get('/:id', getBrand);
router.get('/', getAllBrands);

module.exports = router;