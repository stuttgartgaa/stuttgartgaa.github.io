import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../common/hero/ContactHero";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <section className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-6">
              <h2>Contact Us Today</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="fullNameInput">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullNameInput"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We will never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="subjectInput">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subjectInput"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactTextarea">Message</label>
                  <textarea
                    className="form-control"
                    id="contactTextarea"
                    rows="3"
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="privacyCheck"
                  />
                  <label className="form-check-label" htmlFor="privacyCheck">
                    I have read the privacy statement
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h2>Let&apos;s Chat</h2>
              <p>
                Our door is always open for a coffee or a pint at
                O&apos;Reilly&apos;s
              </p>
              <p>
                Secretary:{" "}
                <a href="mailTo:secretary.stuttgart.europe@gaa.ie">
                  secretary.stuttgart.europe@gaa.ie
                </a>
              </p>
              <p>
                Chairperson:{" "}
                <a href="mailTo:chairperson.stuttgart.europe@gaa.ie">
                  chairperson.stuttgart.europe@gaa.ie
                </a>
              </p>
              <p>
                Treasurer:{" "}
                <a href="mailTo:treasurer.stuttgart.europe@gaa.ie">
                  treasurer.stuttgart.europe@gaa.ie
                </a>
              </p>
            </div>
          </div>
        </section>
        <div id="jumbotron-join" className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Join Stuttgart GAA</h1>
            <p className="lead">Play the fastest sport on grass.</p>
            <Link to="about" className="btn">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
