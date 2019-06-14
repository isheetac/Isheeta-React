import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Isheeta Chinchankar</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Blah
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Oxygen"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Email
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-linkedin" aria-hidden="true" />
                    LinkedIn
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                    GitHub
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Oxygen" }}
                  >
                    <i className="fa fa-codepen" aria-hidden="true" />
                    CodePen
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
