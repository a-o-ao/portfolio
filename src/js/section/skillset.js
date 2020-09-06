import React from 'react';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
// material-kit-react components
import GridContainer from 'js/material-kit-react/Grid/GridContainer.jsx';
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import skillsetPageStyle from 'assets/jss/skillsetSection';
// sections
import Backend from 'js/section/backend';
import Frontend from 'js/section/frontend';
import DevOps from 'js/section/devops';

class SkillSet extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <a name="skillset" />
            <h2 className={classes.title}>Skill Set</h2>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.gridContent}>
          <Backend />
          <Frontend />
          <DevOps />
        </GridContainer>
      </div>
    );
  };
}

export default withStyles(skillsetPageStyle)(SkillSet);