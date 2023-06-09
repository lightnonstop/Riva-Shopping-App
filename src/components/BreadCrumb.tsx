import { Link } from "react-router-dom";
type BreadCrumbProps = {
  title: string;
}
export default function BreadCrumb({title}: BreadCrumbProps) {
  return (
    <div className="breadcrumb py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              <Link className="text-dark" to='/'>Home / &nbsp;</Link>{title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}