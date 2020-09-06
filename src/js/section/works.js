import React from 'react';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
// material-kit-react components
import GridContainer from 'js/material-kit-react/Grid/GridContainer.jsx';
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import skillsetPageStyle from 'assets/jss/skillsetSection';
// sections
import Work1 from 'js/section/work1';
import Work2 from 'js/section/work2';
import Work3 from 'js/section/work3';
import Work4 from 'js/section/work4';

class Works extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <a name="works" />
            <h2 className={classes.title}>Works</h2>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.gridContent}>
          <Work1 />
          <Work2 />
          <Work3 />
          <Work4 />
          <div><p>and more...</p></div>
        </GridContainer>
      </div>
    );
  };
}

export default withStyles(skillsetPageStyle)(Works);