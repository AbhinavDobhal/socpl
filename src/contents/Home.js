import React, { Fragment } from "react";
import IntroImg from "../assets/img/intro-img.svg";
function Home() {
  return (
    <React.Fragment>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={IntroImg} alt="" className="img-fluid" />
          </div>
          <div className="intro-info">
            <h2>
              We provide
              <br />
              <span>Human Resource solutions</span>
              <br />
              for your business!
            </h2>
            <div>
              <a href="/about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a href="/services" className="btn-services scrollto">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3> SUN OUTSOURCE CONSULTANCY PVT</h3>
              <p>
                Incorporated in 2013, Sun Outsource Consultancy (SOC) has
                continued to build on its resource with emphasis on its quality
                human capital value. This has been done over the year with the
                view of delivering customized quality Manpower resource solution
                to our drivers industries and service sector based clients. The
                SOC has grow in the year 2013 to 2017 and after that we
                registered as Sun Outsource Consultancy Private Limited (SOCPL)
                in 2018, SOCPL take over the business of Sun Outsource
                Consultancy(SOC). SOCPL is managed by qualified professional
                Manpower specialist with the several year training and
                experience in India. Through a unique combination of skills,
                competencies, knowledge and favorable experience, SOCPL is able
                to offer Manpower services ranging from professional services to
                turn-key project implementation and operation. We have developed
                our core competence in offering manpower services. Based on
                rudimentary understanding of the market needs, we offer quality
                services at competitive prices to our clients. SOCPL provides
                the complete manpower outsourcing and placement services,
                compliance management services and human resources services in
                Uttarakhand, Delhi, Chennai.
              </p>
            </header>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
