import React from "react";
import { Link } from "react-router-dom";
import Hero from "../common/hero/AboutHero";

const AboutPage = () => (
  <div>
    <Hero />
    <section className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-8">
          <h2>Club History</h2>
          <p>
            Stuttgart GAA was founded in 2016, fully affiliated with Gaelic
            Athletic Association since then and are growing every year. Word
            began to travel around the city that a GAA team had been created in
            Stuttgart and sure enough this attracted players from all regions of
            the world. The GAA team has offered a great opportunity to spread
            the knowledge and skills hurling has to offer while creating a great
            group of friends. Stuttgart GAA always welcomes new players/members
            who would like to contribute to the club! Please contact us for any
            further information.
          </p>
          <p>Stuttgart Abú.</p>
          <h2>Crest</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            risus felis, commodo a nunc non, mattis suscipit risus. Duis
            eleifend, metus sit amet ultrices laoreet, massa mi elementum
            lectus, vitae elementum tortor arcu eget urna. In viverra vel massa
            sed aliquet. Nullam finibus, tortor in feugiat consequat, erat orci
            elementum enim, non ultricies dolor nibh sollicitudin enim. Aenean
            non suscipit dui. Quisque eleifend accumsan mi, a ultricies libero
            pellentesque a. Fusce efficitur nibh non purus vestibulum malesuada.
            Donec faucibus ullamcorper rhoncus. Vestibulum dolor ante, malesuada
            vel tincidunt et, vulputate vitae leo. Sed id posuere metus. Nam
            dictum sit amet nibh eget rhoncus. Aliquam tincidunt arcu vitae
            magna congue accumsan.
          </p>
          <h2>What is Hurling?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            risus felis, commodo a nunc non, mattis suscipit risus. Duis
            eleifend, metus sit amet ultrices laoreet, massa mi elementum
            lectus, vitae elementum tortor arcu eget urna. In viverra vel massa
            sed aliquet. Nullam finibus, tortor in feugiat consequat, erat orci
            elementum enim, non ultricies dolor nibh sollicitudin enim. Aenean
            non suscipit dui. Quisque eleifend accumsan mi, a ultricies libero
            pellentesque a. Fusce efficitur nibh non purus vestibulum malesuada.
            Donec faucibus ullamcorper rhoncus. Vestibulum dolor ante, malesuada
            vel tincidunt et, vulputate vitae leo. Sed id posuere metus. Nam
            dictum sit amet nibh eget rhoncus. Aliquam tincidunt arcu vitae
            magna congue accumsan.
          </p>
          <h2>What is Camogie?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            risus felis, commodo a nunc non, mattis suscipit risus. Duis
            eleifend, metus sit amet ultrices laoreet, massa mi elementum
            lectus, vitae elementum tortor arcu eget urna. In viverra vel massa
            sed aliquet. Nullam finibus, tortor in feugiat consequat, erat orci
            elementum enim, non ultricies dolor nibh sollicitudin enim. Aenean
            non suscipit dui. Quisque eleifend accumsan mi, a ultricies libero
            pellentesque a. Fusce efficitur nibh non purus vestibulum malesuada.
            Donec faucibus ullamcorper rhoncus. Vestibulum dolor ante, malesuada
            vel tincidunt et, vulputate vitae leo. Sed id posuere metus. Nam
            dictum sit amet nibh eget rhoncus. Aliquam tincidunt arcu vitae
            magna congue accumsan.
          </p>
        </div>
        <div className="col-md-4 club-officals">
          <h2>Club Officials</h2>
          <ul>
            <li>
              <h3>Club Chairperson</h3>
            </li>
            <li>
              <h3>Club Secretary</h3>
            </li>
            <li>
              <h3>Club Treasurer</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-3 mb-3" />
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

export default AboutPage;
