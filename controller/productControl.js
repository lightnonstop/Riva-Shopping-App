const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const User = require("../models/userModel");
const validateMongodbId = require('../utils/validateMongodbId');
const cloudinaryUploadImage = require('../utils/cloudinary');
const fs = require('fs');
const createProduct = asyncHandler(async (req, res) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title);
  }
  try {
    const productDoc = await Product.create(req.body);
    res.json(productDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const productDoc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(productDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const removeProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await Product.findOneAndDelete({ _id: id });
    res.json(productDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await Product.findById(id);
    res.json(productDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const getAllProducts = asyncHandler(async (req, res) => {
  try {
    //Product filtering

    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    //Product Sorting
    let sortBy = "";
    if (req.query.sort) {
      sortBy = req.query.sort.split(",").join(" ");
    } else sortBy = "createdAt";
    query = query.sort(sortBy);

    //Limiting product data fields

    let fields = "";
    if (req.query.fields) {
      fields = req.query.fields.split(",").join(" ");
    } else fields = "-__v";
    query = query.select(fields);

    //Pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const totalProducts = await Product.countDocuments();
      if (skip >= totalProducts) throw new Error("Page does not exist");
    }

    const allProductsDoc = await query;
    res.json(allProductsDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId);
    if (alreadyAdded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: prodId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (e) {
    throw new Error(e);
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, prodId, comment } = req.body;
  try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );

    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },

        },
        {
          new: true,
        }
      );
    } else {
      const ratedProduct = await Product.findByIdAndUpdate(
        prodId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedBy: _id,
            },
          },
        },
        { new: true }
      );
    }

    const getProduct = await Product.findById(prodId);
    let numberOfUsersWhoRated = getProduct.ratings.length;
    let totalRatingsByAllUsers = getProduct.ratings
      .map((rating) => rating.star)
      .reduce((prev, current) => prev + current, 0);

    let productAvgRating = Math.round(
      totalRatingsByAllUsers / numberOfUsersWhoRated
    );
    let productDoc = await Product.findByIdAndUpdate(
      prodId,
      {
        totalRating: productAvgRating,
      },
      { new: true }
    );
    res.json(productDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const uploadImages = asyncHandler(async (req, res) => {
  try {
    const uploader = (path) => cloudinaryUploadImage(path, 'images');
    const urls = [];
    const files = req.files;
    for (const file of files){
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const images = urls.map(file => {
      return file;
    });
    res.json(images);
  } catch(e){
    throw new Error(e);
  }
});

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  removeProduct,
  addToWishlist,
  rating,
  uploadImages,
};
