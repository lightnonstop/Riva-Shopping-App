const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongodbId = require('../utils/validateMongodbId');
const cloudinaryUploadImage = require('../utils/cloudinary');
const fs = require('fs');

const createBlog = asyncHandler(async (req, res) => {
  try {
    const blogDoc = await Blog.create(req.body);
    res.json({
      blogDoc,
    });
  } catch (e) {
    throw new Error(e);
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const blogDoc = await Blog.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(blogDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const blogDoc = await Blog.findById(id)
      .populate("likes")
      .populate("dislikes");
    res.json(blogDoc);
    await Blog.findByIdAndUpdate(
      { _id: id },
      {
        $inc: { numViews: 1 },
      },
      {
        new: true,
      }
    );
  } catch (e) {
    throw new Error(e);
  }
});

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const blogDocs = await Blog.find();
    res.json(blogDocs);
  } catch (e) {
    throw new Error(e);
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const blogDoc = await Blog.findByIdAndDelete(id);
    res.json(blogDoc);
  } catch (e) {
    throw new Error(e);
  }
});

const likeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongodbId(blogId);

  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);

  //Find the logged in user
  const loginUserId = req?.user?._id;

  //Find if the user has liked the blog  or not
  const isLiked = blog?.isLiked;

  //Find if the user is among other disliking users of the blog
  const alreadyDisliked = blog?.dislikes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (alreadyDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { likes: loginUserId },
        isLiked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

const dislikeBlog = asyncHandler(async (req, res) => {
  const { blogId } = req.body;
  validateMongodbId(blogId);

  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);

  //Find the logged in user
  const loginUserId = req?.user?._id;

  //Find if the user has liked the blog  or not
  const isDisliked = blog?.isDisliked;

  //Find if the user is among other disliking users of the blog
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );

  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isDisliked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
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
  
      const blogDoc = await Blog.findByIdAndUpdate(id, {
        images: urls.map(file => {
          return file;
        }),
      }, { new: true, })
      res.json(blogDoc);
    } catch(e){
      throw new Error(e);
    }
  });

module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadImages,
};
