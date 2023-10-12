import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div>
        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start bg-white text-muted">
          {/* Section: Social media */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Left */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left */}
            
            {/* Right */}
            <div>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 link-secondary">
                <i className="fab fa-github"></i>
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
          
          {/* Section: Links  */}
          <section>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary"></i>NewsPaper
                  </h6>
                  <p>
                    Here you can get the absolute Authentic news around the Globe.
                  </p>
                </div>
                {/* Grid column */}
                
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Javascript</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React Js</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Bootstrap</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">CSS</a>
                  </p>
                </div>
                {/* Grid column */}
                
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
                  </p>
                </div>
                {/* Grid column */}
                
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3 text-secondary"></i> Pune, Maharashtra, India</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                     newpaper123@gmail.com
                  </p>
                  <p><i className="fas fa-phone me-3 text-secondary"></i> + 91-8920377342</p>
                  <p><i className="fas fa-print me-3 text-secondary"></i> + 91-8991074739</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          
          {/* Copyright */}
          <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">newpaper123@gmail.com</a>
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </div>
    );
  }
}

export default Footer;
