import React from "react";

function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="section-header">
          <h3>Team</h3>
          <p>Meet the Leadership Team</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 wow fadeInUp">
            <div className="member">
              <img
                src={require("../assets/img/team-1.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Mr Ravi Bist</h4>
                  <span>Director (Business)</span>
                  <div className="social">
                    <a href>
                      <i className="fa fa-twitter" />
                    </a>
                    <a href>
                      <i className="fa fa-facebook" />
                    </a>
                    <a href>
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="member">
              <img
                src={require("../assets/img/team-3.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Mr Rajeev Sharma</h4>
                  <span>Director (Finance)</span>
                  <div className="social">
                    <a href>
                      <i className="fa fa-twitter" />
                    </a>
                    <a href>
                      <i className="fa fa-facebook" />
                    </a>
                    <a href>
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="member">
              <img
                src={require("../assets/img/team-2.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Mrs. Chirta Bist</h4>
                  <span>Finance Controller</span>
                  <div className="social">
                    <a href>
                      <i className="fa fa-twitter" />
                    </a>
                    <a href>
                      <i className="fa fa-facebook" />
                    </a>
                    <a href>
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="member">
              <img
                src={require("../assets/img/team-4.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Mrs. Meenu Sharma</h4>
                  <span>Manager Admin</span>
                  <div className="social">
                    <a href>
                      <i className="fa fa-twitter" />
                    </a>
                    <a href>
                      <i className="fa fa-facebook" />
                    </a>
                    <a href>
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="member">
              <img
                src={require("../assets/img/team-1.jpg")}
                className="img-fluid"
                alt=""
              />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Mr. Shyam Thapa</h4>
                  <span>H R Manager</span>
                  <div className="social">
                    <a href>
                      <i className="fa fa-twitter" />
                    </a>
                    <a href>
                      <i className="fa fa-facebook" />
                    </a>
                    <a href>
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href>
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
