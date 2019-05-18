import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div className='landing-body'>
        <Grid className="landing-grid">
          <Cell id="img" col={3}>
            <img
              src="/images/IMG_2711.jpg"
              alt="profile"
              className="avatar-image"
              style={{ height: '150px' }}
            />
          </Cell>
          <Cell id="name" col={8}>
            <div className="name">
              <h1>Matt Etress</h1>
              <h2>Full Stack Software Engineer</h2>
              <section className="icons">

              </section>
            </div>


          </Cell>
          {/*
          <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr />
            <p>Ruby on Rails | JavaScript | React.js | HTML/CSS </p>

            <div className="social-links">

            <a rel="noopener noreferrer" href="http://google.com" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            <a rel="noopener noreferrer" href="http://google.com" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            <a rel="noopener noreferrer" href="http://google.com" target="_blank">
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>



            </div>

          </div> */}
        </Grid>
      </div >
    )
  }
}

export default Landing;