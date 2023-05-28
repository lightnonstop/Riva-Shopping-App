const express = require('express');
const { createCoupon, getAllCoupons, updateCoupon, removeCoupon } = require('../controller/couponControl');
const { authVerify, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authVerify, isAdmin, createCoupon);
router.get('/', authVerify, isAdmin, getAllCoupons);
router.put('/:id', authVerify, isAdmin, updateCoupon);
router.delete('/:id', authVerify, isAdmin, removeCoupon);
module.exports = router;