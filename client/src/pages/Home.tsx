import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
export default function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6 className="text-capitalize">free shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6 className="text-capitalize">daily surprise offers</h6>
                    <p className="mb-0">save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6 className="text-capitalize">support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6 className="text-capitalize">affordable prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6 className="text-capitalize">secure payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="feature-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Featured Collection</h3>
              </div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
              <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
        </div>
      </section>
      <section className="marquee-wrapper-2 py-5">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Latest Feed</h3>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-center gap-15">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
