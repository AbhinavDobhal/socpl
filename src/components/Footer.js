import React, { Component } from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-info">
              <h4>Sun Outsource Consultancy PVT</h4>
              <p>
                Incorporated in 2013, Sun Outsource Consultancy (SOC) has
                continued to build on its resource with emphasis on its quality
                human capital value. This has been done over the year with the
                view of delivering customized quality Manpower resource solution
                to our drivers industries and service sector based clients.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/service">Services</a>
                </li>
                <li>
                  <a href="/team">Team</a>
                </li>
                <li>
                  <a href="/jobs">Jobs</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Sun Outsource Consultancy Private Limited Registered Office : 27
                Araghar, Prem Complex, <br />
                1st Floor, Haridwar Road, Dehradun
                <br />
                India <br />
                <strong>Phone:</strong> +91 9760424117
                <br />
                <strong>Email:</strong> info@socpl.com
                <br />
              </p>
              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#" className="linkedin">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>

              <form action method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright <strong>SOCPL</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://www.squidinfotech.com/">Squid InfoTech </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
