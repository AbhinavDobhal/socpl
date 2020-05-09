import React from "react";

function Clients() {
  return (
    <section id="clients" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3>Our Clients</h3>
          <p>Our Valuable Clients</p>
        </div>
        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-1.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-2.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-3.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-4.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-5.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-6.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-7.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
              <img
                src={require("../assets/img/clients/client-8.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
