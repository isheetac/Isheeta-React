import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textALign: "center" }}>
              <img
                src="data:image/jpeg;base64,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"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Isheeta Chinchankar</h2>
            <h4 style={{ color: "lightgray" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid black", width: "50%" }} />
            <p>Blah</p>
            <hr style={{ borderTop: "3px solid black", width: "50%" }} />
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Education
              startYear={2013}
              endYear={2015}
              schoolName="University"
              schoolDescription="University for Blah and Blah and Blah and Blah"
            />
            <Education
              startYear={2015}
              endYear={2018}
              schoolName="University"
              schoolDesc="University for Blah and Blah and Blah and Blah"
            />
            <hr style={{ borderTop: "3px solid black" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
