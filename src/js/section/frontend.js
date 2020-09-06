import React from 'react';
import PropTypes, { func } from 'prop-types';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
// @material-ui/core/colors
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
// material-kit-react components
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import skillsetPageStyle from 'assets/jss/skillsetSection';
// parts
import {proficiencyTooltipOpen, proficiencyTooltipClose} from 'js/parts/proficiencyTooltip';

const data = [
  {name: 'Html5', proficiency: 4},
  {name: 'CSS3', proficiency: 3},
  {name: 'JavaScript', proficiency: 4},
  {name: 'jQuery', proficiency: 4},
  {name: 'ES6', proficiency: 2},
];

class Frontend extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <GridItem xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" component="h6" align="center">
                Front End
              </Typography>
              <div className={classes.barChart}>
                <ResponsiveContainer width="100%" height={320}>
                  <RadarChart
                    data={data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                  >
                    <PolarAngleAxis dataKey="name" tick={{fontSize: 12}} />
                    <PolarRadiusAxis tick={{fontSize: 12}} type="number" domain={[0, 5]} tickCount={6} />
                    <PolarGrid />
                    <Tooltip />
                    <Legend
                      payload={[{ value: '習熟度', type: 'rect', color: pink[300] }]}
                      onMouseEnter={proficiencyTooltipOpen}
                      onMouseLeave={proficiencyTooltipClose}
                      wrapperStyle={{
                                      color: blue[500],
                                      cursor: "pointer",
                                      fontWeight: "bold",
                                      fontSize: "14px"
                                    }}
                    />
                    <Radar dataKey="proficiency" fill={pink[300]} fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardActions>
              <Button size="large" color="primary" onClick={this.handleOpen}>Learn More</Button>
            </CardActions>
          </Card>
          <Modal
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div className={classNames(classes.paper, classes.modal)}>
              <Typography variant="body2" className={classes.categoryBlock}>
                <div>
                  <Avatar className={classNames(classes.circle, classes.blue)}></Avatar>
                  業務で1年以上使用
                </div>
                <div>
                  <Avatar className={classNames(classes.circle, classes.pink)}></Avatar>
                  業務での使用経験が１年未満
                </div>
                <div>
                  <Avatar className={classNames(classes.circle, classes.purple)}></Avatar>
                  個人で勉強した
                </div>
              </Typography>
              <div className={classes.categoryBlock}>
                <Typography variant="subtitle2">
                  JavaScript
                </Typography>
                <Chip label="JavaScript" className={classes.blue} />
                <Chip label="jQuery" className={classes.blue} />
                <Chip label="Backbone.js" className={classes.pink} />
                <Chip label="ES6" className={classes.pink} />
                <Chip label="Node.js" className={classes.pink} />
                <Chip label="React" className={classes.purple} />
              </div>
              <div className={classes.categoryBlock}>
                <Typography variant="subtitle2">
                  CSS
                </Typography>
                <Chip label="CSS3" className={classes.blue} />
                <Chip label="LESS" className={classes.blue} />
                <Chip label="SCSS" className={classes.pink} />
              </div>
              <div className={classes.categoryBlock}>
                <Typography variant="subtitle2">
                  Tools and Others
                </Typography>
                <Chip label="gulp" className={classes.blue} />
                <Chip label="Webpack4" className={classes.purple} />
                <Chip label="Bootstrap" className={classes.blue} />
                <Chip label="QUnit" className={classes.pink} />
              </div>
            </div>
          </Modal>
        </GridItem>
      </React.Fragment>
    );
  };
}

Frontend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(skillsetPageStyle)(Frontend);