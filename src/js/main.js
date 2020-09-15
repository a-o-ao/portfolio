import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
// material-kit-react components
import Header from 'js/material-kit-react/Header/Header.jsx';
import HeaderLinks from 'js/componnent/HeaderLinks.jsx';
import Parallax from 'js/material-kit-react/Parallax/Parallax.jsx';
import GridContainer from 'js/material-kit-react/Grid/GridContainer.jsx';
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// sections
import SkillSet from 'js/section/skillset';
import Works from 'js/section/works';
import AboutMyself from 'js/section/aboutMyself';
import ProficiencyTooltip from 'js/parts/proficiencyTooltip';
// jss
import mainPageStyle from 'assets/jss/mainPage';

class Content extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="home"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
         {...rest}
        />
        <Parallax filter small image={require("../assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Web Developer</h1>
              <h4>
                I'm freelance web developer.<br />
                Feel free to take a look at my Portfolio page created using
                <Link
                  href="https://reactjs.org/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  color="primary"
                > React</Link>.<br />
                and Check out my skills and works.
              </h4>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://github.com/endo-a/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
              >
                <img src={require("../assets/img/GitHub-Mark-Light-32px.png")} className={classes.iconImage} />
                View in GitHub
              </Button>
            </GridItem>
          </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SkillSet />
            <Works />
            <AboutMyself />
          </div>
        </div>
        <ProficiencyTooltip />
      </div>
    );
  };
}

export default withStyles(mainPageStyle)(Content);