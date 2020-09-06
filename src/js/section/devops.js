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
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';
// material-kit-react components
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import skillsetPageStyle from 'assets/jss/skillsetSection';
// parts
import {proficiencyTooltipOpen, proficiencyTooltipClose} from 'js/parts/proficiencyTooltip';


const data = [
  {name: 'Linux', proficiency: 3},
  {name: 'Git', proficiency: 4},
  {name: 'Apache Http Server', proficiency: 3},
  {name: 'Selenium', proficiency: 4},
  {name: 'AWS', proficiency: 3},
];

class DevOps extends React.Component {
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
    const { classes, ...rest } = this.props;
    return (
      <React.Fragment>
        <GridItem xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6" component="h6" align="center">
                DevOps and Others
              </Typography>
              <div className={classes.barChart}>
                <ResponsiveContainer width="100%" height={320}>
                  <RadarChart
                    data={data}
                    margin={{ top: 0, right: 5, left: 5, bottom: 0 }}
                  >
                    <PolarAngleAxis dataKey="name" tick={{fontSize: 12}} />
                    <PolarRadiusAxis tick={{fontSize: 12}} type="number" domain={[0, 5]} tickCount={6} />
                    <PolarGrid />
                    <Tooltip />
                    <Legend
                      payload={[{ value: '習熟度', type: 'rect', color: orange[300] }]}
                      onMouseEnter={proficiencyTooltipOpen}
                      onMouseLeave={proficiencyTooltipClose}
                      wrapperStyle={{
                                      color: blue[500],
                                      cursor: "pointer",
                                      fontWeight: "bold",
                                      fontSize: "14px"
                                    }}
                    />
                    <Radar dataKey="proficiency" fill={orange[300]} fillOpacity={0.6} />
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
                  オペレーション、設定、SDK等を使いこなせる。
                </div>
                <div>
                  <Avatar className={classNames(classes.circle, classes.pink)}></Avatar>
                  調査しながら業務で対応できる。
                </div>
                <div>
                  <Avatar className={classNames(classes.circle, classes.purple)}></Avatar>
                  個人で勉強した
                </div>
              </Typography>
              <div className={classes.categoryBlock}>
                <Typography variant="subtitle2">
                  Server and Middle Ware
                </Typography>
                <Chip label="Linux" className={classes.blue} />
                <Chip label="Apache Http Server" className={classes.pink} />
                <Chip label="NginX" className={classes.pink} />
                <Chip label="Apache Tomcat" className={classes.pink} />
              </div>
              <div className={classes.categoryBlock}>
                <Typography variant="subtitle2">
                  AWS
                </Typography>
                <Chip label="Amazon EC2" className={classes.pink} />
                <Chip label="Amazon S3" className={classes.pink} />
              </div>
              <div className={classes.categoryBlock}>
                <Typography variant="subtitle2">
                  CI Tools
                </Typography>
                <Chip label="Jenkins" className={classes.pink} />
                <Chip label="Bamboo" className={classes.pink} />
              </div>
              <div className={classes.categoryBlock}>
                <Typography variant="subtitle2">
                  Tools and Others
                </Typography>
                <Chip label="Selenium" className={classes.blue} />
                <Chip label="Git" className={classes.blue} />
                <Chip label="GitHub" className={classes.blue} />
                <Chip label="BitBucket" className={classes.pink} />
                <Chip label="JIRA" className={classes.blue} />
                <Chip label="Redmine" className={classes.blue} />
              </div>
            </div>
          </Modal>
        </GridItem>
      </React.Fragment>
    );
  };
}

DevOps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(skillsetPageStyle)(DevOps);