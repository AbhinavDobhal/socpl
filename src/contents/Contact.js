import React, { Component } from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="container-fluid">
        <div className="section-header">
          <h3>Contact Us</h3>
        </div>
        <div className="row wow fadeInUp">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-5 info">
                <i className="ion-ios-location-outline" />
                <p>
                  27 Araghar, Prem Complex,1st Floor, Haridwar Road, Dehradun{" "}
                </p>
              </div>
              <div className="col-md-4 info">
                <i className="ion-ios-email-outline" />
                <p>info@socpl.com</p>
              </div>
              <div className="col-md-3 info">
                <i className="ion-ios-telephone-outline" />
                <p>9760424117 </p>
              </div>
            </div>
            <div className="form">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate" />
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    defaultValue={""}
                  />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" title="Send Message">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
