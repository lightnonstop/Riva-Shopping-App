import ReactStars from 'react-rating-stars-component';
import { Link, useNavigate } from 'react-router-dom';
import { prodcompare, wish, watch, watch2, addcart, view } from '../images';
import { addProductToWishlist } from '../features/product/productSlice';
import Marquee from 'react-fast-marquee';
import BlogCard from "../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/data";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { getAllBlogs } from "../features/blog/blogSlice";
import moment from "moment";
import { getAllProducts } from "../features/product/productSlice";
export default function Home() {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(state => state.blog.blogs);
  const products = useAppSelector(state => state.product.products)
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);
  const addToWishList = (id: { prodId: string; }) => {
    dispatch(addProductToWishlist(id))
  }
  return (
    <>
      <Container containerClass='home-wrapper-1 py-5'>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img className="img-fluid rounded-3" src="/images/main-banner-1.jpg" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>supercharged for pros.</h4>
                <h5>iPad s13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button" to=''>buy now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img className="img-fluid rounded-3" src="/images/catbanner-01.jpg" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>best sale</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img className="img-fluid rounded-3" src="/images/catbanner-02.jpg" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>best sale</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img className="img-fluid rounded-3" src="/images/catbanner-03.jpg" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>best sale</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img className="img-fluid rounded-3" src="/images/catbanner-04.jpg" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>best sale</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $999.00 <br /> or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container containerClass='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                services?.map((service, index) => (
                  <div key={index} className="d-flex align-items-center gap-15">
                    <img src={service.image} alt="service" />
                    <div>
                      <h6 className="text-capitalize">{service.title}</h6>
                      <p className="mb-0">{service.tagline}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
      <Container containerClass='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className="d-flex align-items-center">
                <div>
                  <h6>computers & laptop</h6>
                  <p>8 Items</p>
                </div>
                <img src="/images/laptop.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>cameras & videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>smart television</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/tv.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>smartwatches</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>music & gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>mobiles & tablets</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/acc.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>portable speakers</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/speaker.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>home appliances</h6>
                  <p>10 Items</p>
                </div>
                <img src="/images/homeapp.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container containerClass="feature-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {
            products?.map((item, index) => (
              item.tag === 'featured' &&
              <div key={index} className='col-3'>
                <div className='product-card position-relative'>
                  <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent' onClick={() => addToWishList({ prodId: item._id })}>
                      <img src={wish} alt="wishlist" />
                    </button>
                  </div>
                  <div className='product-image'>
                    <img className='img-fluid' src={watch} alt="product" />
                    <img className='img-fluid' src={watch2} alt="product" />
                  </div>
                  <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>
                      {item.title}
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={Number(item.totalRating)}
                      edit={false}
                      activeColor='#FFD700'
                    />
                    <p className='price'>{`$ ${item.price}`}</p>
                  </div>
                  <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                      <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt="compare" />
                      </button>
                      <button className='border-0 bg-transparent'>
                        <img onClick={() => navigate(`/product/${item._id}`)} src={view} alt="view" />
                      </button>
                      <button className='border-0 bg-transparent'>
                        <img src={addcart} alt="add-cart" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </Container>
      <Container containerClass="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-1.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7.</h6>
                <p>From $399 or $14.42/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-2.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute text-dark">
                <h5>Studio Display</h5>
                <h6>Smartphone 13 Pro.</h6>
                <p>27-inch 5k retina display</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-3.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute text-dark">
                <h5>Smartphones</h5>
                <h6>Room-filling sound.</h6>
                <p>Now in Green from $999.00 or $41.62/mo. for 24 mo. Footnote*</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-4.webp" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute text-dark">
                <h5>Home Speakers</h5>
                <h6>Room-filling sound.</h6>
                <p>From $699 or $116.58 /mo. for 12 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container containerClass="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            products?.map((item, index) => (
              item.tag === 'special' && <SpecialProduct
                key={index}
                title={item.title}
                brand={item.brand}
                totalRating={Number(item.totalRating)}
                price={item.price}
                sold={item.sold}
                id={item._id}
                quantity={item.quantity}
              />
            ))
          }
        </div>
      </Container>
      <Container containerClass="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            {
              products?.map((item, index) => (
                item.tag === 'popular' && <div key={index} className='col-3'>
                  <div 
                    className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                      <button className='border-0 bg-transparent' onClick={() => addToWishList({ prodId: item._id })}>
                        <img src={wish} alt="wishlist" />
                      </button>
                    </div>
                    <div className='product-image'>
                      <img className='img-fluid' src={watch} alt="product" />
                      <img className='img-fluid' src={watch2} alt="product" />
                    </div>
                    <div className='product-details'>
                      <h6 className='brand'>Havels</h6>
                      <h5 className='product-title'>
                        {item.title}
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={Number(item.totalRating)}
                        edit={false}
                        activeColor='#FFD700'
                      />
                      <p className='price'>{`$ ${item.price}`}</p>
                    </div>
                    <div className='action-bar position-absolute'>
                      <div className='d-flex flex-column gap-15'>
                        <button className='border-0 bg-transparent'>
                          <img src={prodcompare} alt="compare" />
                        </button>
                        <button className='border-0 bg-transparent'>
                          <img onClick={() => navigate(`/product/${item._id}`)} src={view} alt="view" />
                        </button>
                        <button className='border-0 bg-transparent'>
                          <img src={addcart} alt="add-cart" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
      <Container containerClass="marquee-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="/images/brand-01.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-02.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-03.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-04.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-05.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-06.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-07.png" alt="" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/images/brand-08.png" alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container containerClass="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <h3 className="section-heading">Our Latest Feed</h3>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center gap-15">
              {
                blogs?.map((blogItem, index) => {
                  if (index < 4) {
                    return (
                      <div className="col-3" key={index}>
                        <BlogCard id={blogItem._id} title={blogItem.title} description={blogItem.description} image={blogItem.images[0].url}

                          date={moment(blogItem.createdAt).format("MMMM Do YYYY, h:mm a")}
                        />
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
