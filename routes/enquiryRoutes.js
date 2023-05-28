const express = require('express');
const { createEnquiry, updateEnquiry, removeEnquiry, getEnquiry, getAllEnquiries } = require('../controller/enquiryControl');
const { authVerify, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', createEnquiry);
router.put('/:id', authVerify, isAdmin, updateEnquiry);
router.delete('/:id', authVerify, isAdmin, removeEnquiry);
router.get('/:id', getEnquiry);
router.get('/', getAllEnquiries);

module.exports = router;