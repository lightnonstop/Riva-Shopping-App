import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
export default function OurStore() {
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card">
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
              <div className="filter-card">
                <h3 className="filter-title">
                  Filter By
                </h3>
              </div>
              <div className="filter-card">
                <h3 className="filter-title">
                  Product Tags
                </h3>
              </div>
              <div className="filter-card">
                <h3 className="filter-title">
                  Random Product
                </h3>
              </div>
            </div>
            <div className="col-9">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}