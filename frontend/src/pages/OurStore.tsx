import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from 'react-rating-stars-component';
export default function OurStore() {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Shop By Categories
                </h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput"
                      placeholder="From"
                        />
                      <label htmlFor="floatingInput">From</label>
                    </div>

                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput"
                      placeholder="To"
                        />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="color-1" className="form-check-label" id="color-1">
                        S (2)
                      </label>
                    </div>

                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="color-2" className="form-check-label" id="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              <div className="filter-card">
                <h3 className="filter-title">Random Product
                </h3>
                <div>
                  <div className="random-products d-flex mb-3">
                    <div className="w-50">
                      <img className="img-fluid" src="/images/watch.jpg" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value='3'
                        edit={false}
                        activeColor='#FFD700'
                      />
                      <p>$ 300</p>
                    </div>
                  </div>

                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img className="img-fluid" src="/images/watch.jpg" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value='3'
                        edit={false}
                        activeColor='#FFD700'
                      />
                      <p>$ 300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex  align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{width: '100px'}}>Sort By:</p>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best selling</option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10 grid">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center">
                      <img className="d-block img-fluid" src="/images/gr4.svg" alt="grid" />
                      <img className="d-block img-fluid" src="/images/gr3.svg" alt="grid" />
                      <img className="d-block img-fluid" src="/images/gr2.svg" alt="grid" />
                      <img className="d-block img-fluid" src="/images/gr.svg" alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}