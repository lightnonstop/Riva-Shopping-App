import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
export default function Contact() {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <iframe title="contact" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4587047611503!2d7.950969571397423!3d5.029104583780767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d57f45bf90961%3A0xfd76f166d5f9911f!2s220%20Nwaniba%20Road%2C%20520101%2C%20Uyo%2C%20Akwa%20Ibom!5e0!3m2!1sen!2sng!4v1686127855165!5m2!1sen!2sng" width="600" height="450" className="border-0 w-100" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                </div>
                <div>
                <h3 className="contact-title">Get in Touch with Us</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
