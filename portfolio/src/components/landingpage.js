import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/RT9wq8z/Isheeta-Chinchankar-1.png"
              alt="Isheeta-Chinchankar-1"
              className="logo-img"
            />
            <div className="banner-text">
              <h2>An Aspiring Web Developer</h2>
              <hr />
              <p>
                HTML | CSS | Bootstrap | JavaScript | ReactJS | Angular 7.0 |
                PHP |
              </p>
              <div className="social-links">
                <a
                  href="https://www.github.com/isheetac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/isheeta-chinchankar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://codepen.io/isheetac/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-codepen" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
