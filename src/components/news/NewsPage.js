import React, { Component } from "react";
import Header from "../common/header/Header";

import Logo from "../../images/stuttgart_logo-512x512.png";

class NewsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="container">
          <div className="row">
            <div className="col-md-8 mt-5">
              <h2>Stuttgart GAA News</h2>
              <div className="card mt-3 mb-5 card-news">
                <div className="row no-gutters">
                  <div className="col-md-4 mt-3 mb-3">
                    <img src={Logo} className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Read more...
                      </a>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <h2>Our Sponsor</h2>
              <h5>O&apos;Reilly&apos;s Irish Pub</h5>
              <p>
                Traditional Irish Pub in Reuchlinstrasse 27, 70176 Stuttgart.
              </p>
              <p>Open daily until 3am - Food served until 11pm.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NewsPage;
