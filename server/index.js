const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv');
const PORT = process.env.SERVER_PORT || 4000;
const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoutes');
const blogRouter = require('./routes/blogRoutes');
const brandRouter = require('./routes/brandRoutes');
const colorRouter = require('./routes/colorRoutes');
const enquiryRouter = require('./routes/enquiryRoutes');
const prodCategoryRouter = require('./routes/prodCategoryRoutes');
const blogCategoryRouter = require('./routes/blogCategoryRoutes');
const couponRouter = require('./routes/couponRoutes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middlewares/errorHandling');

dotenv.config();
dbConnect();

const app = express();

app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/brand', brandRouter);
app.use('/api/color', colorRouter);
app.use('/api/enquiry', enquiryRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category-product', prodCategoryRouter);
app.use('/api/category-blog', blogCategoryRouter);
app.use('/api/coupon', couponRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log('Running server on port', PORT);
})