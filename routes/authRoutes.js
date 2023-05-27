const express = require('express');
const { createUser, loginUser, getAllUsers, getUser, deleteUser, updateUser, unblockUser, blockUser, handleRefreshToken, logoutUser, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, removeCart, applyCoupon, createOrder, getOrders } = require('../controller/userControl');
const { isAdmin, authVerify } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/get-orders', authVerify, getOrders);
router.get('/all-users', getAllUsers);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logoutUser);
router.get('/wishlist', authVerify, getWishlist);
router.get('/cart', authVerify, getUserCart);

router.get('/:id', authVerify , isAdmin ,  getUser);

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/admin-login', loginAdmin);
router.post('/cart', authVerify, userCart);
router.post('/forgot-password-token', forgotPasswordToken);
router.post('/cart/apply-coupon', authVerify, applyCoupon);
router.post('/cart/cash-order', authVerify, createOrder);

router.delete('/remove-cart', authVerify, removeCart);
router.delete('/:id', deleteUser);

router.put('/:edit-user', authVerify, updateUser);
router.put('/save-address', authVerify, saveAddress);
router.put('/reset-password/:token', resetPassword);
router.put('/password', authVerify ,updatePassword);

router.put('/block-user/:id', authVerify, isAdmin, blockUser);
router.put('/unblock-user/:id', authVerify, isAdmin, unblockUser);



module.exports = router;