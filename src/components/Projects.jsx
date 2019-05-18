import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories() {
    switch (this.state.activeTab) {

      case 0:

        return (
          <>
            <Cell col={3} >
              <Card shadow={5} style={{ midWidth: '450', margin: "auto" }}>
                <CardTitle style={{ color: "#000", height: "176px", background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }}>
                  TV Pal
            </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis dolore quod repudiandae amet voluptate autem exercitationem error quisquam excepturi deserunt, iure ipsum voluptates corrupti cumque! Officia quia neque maiores!
            </CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#000' }} >
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>

            <Cell col={3} >
              <Card shadow={5} style={{ midWidth: '450', margin: "auto" }}>
                <CardTitle style={{ color: "#000", height: "176px", background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover' }}>
                  TV Pal
</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis dolore quod repudiandae amet voluptate autem exercitationem error quisquam excepturi deserunt, iure ipsum voluptates corrupti cumque! Officia quia neque maiores!
</CardText>
                <CardActions border>
                  <Button colored>GitHub</Button>
                  <Button colored>CodePen</Button>
                  <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{ color: '#000' }} >
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </Cell>
          </>
        )

      case 1:
        return (
          <h1>This is Rails</h1>
        )

      case 2:

        return (
          <h1>This is Sinatra</h1>
        )

      case 3:
        return (
          <h1>This is Ruby</h1>
        )

      default:
        return null;
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Rails</Tab>
          <Tab>Sinatra</Tab>
          <Tab>Ruby</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            {this.toggleCategories()}
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;