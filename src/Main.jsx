import React from 'react';
import LandingPage from './components/LandingPage';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';




const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  )
}

export default Main;