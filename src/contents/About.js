import React from "react";

function About() {
  return (
    <main id="main">
      <section id="about">
        <div className="container">
          <header className="section-header">
            <h3>About Us</h3>
            <p>
              SOCPL has trod the most innovative and strategic path in making
              human resource more customized to the needs of various industries.
              Being India's leading government recognized Manpower Service
              provider in Uttarakhand, SOCPL has become the ideal choice of
              leading companies who wish to recruit professional human resources
              from India. Our deep expertise in Operations and People management
              leads us far ahead of our competitors. Our team of experienced
              professionals gives best productivity and services by ensuring
              high morale and low attrition rate of employees.
            </p>
          </header>
          <div className="row about-container">
            <div className="col-lg-6 content order-lg-1 order-2">
              <p>
                We offer Manpower services ranging from manpower service to
                turn-key project implementation and operation. The company's
                core expertise in manpower services is powered by the following
                cutting-edge advantages:
              </p>

              <ul>
                <li>
                  <a href>
                    <strong>
                      {" "}
                      Identification with and understanding the needs of each
                      industry.
                    </strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong> Competitively cost effective.</strong>
                  </a>
                </li>

                <li>
                  <a href>
                    <strong>
                      Transparency in operations and professional code of
                      conduct.
                    </strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong>
                      Commitment in provision of manpower in specific timeframe.
                    </strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong>
                      Ensured quality, confidentially and client loyalty.
                    </strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong>
                      Extensive reach with an exhaustive, nationwide database of
                      qualified candidates
                    </strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong>
                      A dynamic team of qualified and experienced experts with
                      senior consultants from diverse fields of various
                      industries.
                    </strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
              <img
                src={require("../assets/img/about-img.svg")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="row about-extra">
            <div className="col-lg-6 wow fadeInUp">
              <img
                src={require("../assets/img/about-extra-1.svg")}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <h4>The SOCPL Advantage</h4>
              <ul>
                <li>
                  <a href>
                    <strong>A pan India reach</strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong> Amazingly low attrition rate</strong>
                  </a>
                </li>

                <li>
                  <a href>
                    <strong>Quick response time</strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong>
                      Focus on productivity for both Clients & Workers
                    </strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong>Personal connect with workers</strong>
                  </a>
                </li>
                <li>
                  <a href>
                    <strong>Close coordination with clients</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
