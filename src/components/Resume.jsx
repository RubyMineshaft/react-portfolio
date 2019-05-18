import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/IMG_2711.jpg"
                alt="avatar"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Matthew Etress</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fe2", width: "50%" }} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maxime pariatur asperiores ex? Inventore expedita quis quisquam consectetur placeat? Voluptatem ipsum suscipit aperiam, voluptate saepe vel atque a perferendis et?</p>
            <hr style={{ borderTop: "3px solid #833fe2", width: "50%" }} />
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(555) 555-5555</p>
            <h5>Email</h5>
            <p>email@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fe2", width: "50%" }} />


          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2018}
              endYear={2019}
              schoolName={'Flatiron School'}
              schoolDescription={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie odio odio, sodales vehicula velit varius vitae. Suspendisse pretium augue.'}
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName={"First Job"}
              jobDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu sem sit amet nibh ullamcorper tempus. Nulla in ligula sit amet magna rutrum dapibus. Etiam ultrices arcu et lacus bibendum."}
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>

            <Skills skill={"JavaScript"} progress={100} />
            <Skills skill={"Ruby"} progress={100} />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;