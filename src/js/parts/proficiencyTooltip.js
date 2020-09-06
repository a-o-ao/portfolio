import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// jss
import skillsetPageStyle from 'assets/jss/skillsetSection';

const ProficiencyTooltip = (props) => {
  const { classes } = props;
  return (
    <div className={classNames(classes.proficiencyTooltip)} id="proficiencyTooltip">
      <Card className={classes.detail}>
        <CardContent className={classes.detailContent}>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemText primary="1: Beginner" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="2: 実務経験3ヶ月程度" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="3: 実務で難なく使える" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="4: 人に教えることができる" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText primary="5: Professional" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}

export const proficiencyTooltipOpen = (p, o, e) => {
  e.stopPropagation();
  var tooltip = document.getElementById('proficiencyTooltip');
  var y = e.clientY > 210 ? e.pageY - 220: e.pageY + 20;
  var x = e.clientX - 150;
  tooltip.style.top = y + 'px';
  tooltip.style.left = x + 'px';
  tooltip.style.display = "block";
};

export const proficiencyTooltipClose = (p, o, e) => {
  e.stopPropagation();
  var tooltip = document.getElementById('proficiencyTooltip');
  tooltip.style.display = "none";
};

export default withStyles(skillsetPageStyle)(ProficiencyTooltip);