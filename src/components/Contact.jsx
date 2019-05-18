import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Matt Etress</h2>
            <img
              src="/images/IMG_2711.jpg"
              alt="avatar"
              style={{ height: "250px", borderRadius: "10%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa debitis obcaecati consectetur aut ipsa illum deleniti ipsam eius officiis amet cupiditate quo rerum possimus incidunt optio, ea reiciendis atque.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-phone-square" aria-hidden="true" /> (555) 555-5555
                    </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-github" />userID                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-youtube"></i>userID                   </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}>
                    <i className="fa fa-envelope"></i>email@example.com                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;