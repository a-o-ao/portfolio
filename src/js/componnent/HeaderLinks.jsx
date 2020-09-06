/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#skillset"
          color="transparent"
          className={classes.navLink}
        >
          Skill Set
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#works"
          color="transparent"
          className={classes.navLink}
        >
          Works
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#aboutMyself"
          color="transparent"
          className={classes.navLink}
        >
          About Myself
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
