import React from 'react';
import PropTypes from 'prop-types';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from 'recharts';
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
import teal from '@material-ui/core/colors/teal';
// material-kit-react components
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import skillsetPageStyle from 'assets/jss/skillsetSection';

const data = [
  {name: 'Java', year: 10},
  {name: 'PHP', year: 3},
  {name: 'Ruby', year: 1},
  {name: 'MySQL', year: 12},
  {name: 'PostgreSQL', year: 1.5},
];

class Backend extends React.Component {
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
      <GridItem xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6" component="h6" align="center">
              Back End
            </Typography>
            <div className={classes.barChart}>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart
                  layout="vertical"
                  data={data}
                  margin={{ top: 0, right: 0, left: 20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tick={{fontSize: 12}} />
                  <YAxis type="category" dataKey="name" tick={{fontSize: 12}} />
                  <Tooltip />
                  <Legend
                    wrapperStyle={{ fontSize: "14px" }}
                    payload={[{ value: '経験年数', type: 'rect', color: teal[300] }]}
                  />
                  <Bar dataKey="year" fill={teal[300]} fillOpacity={0.6} />
                </BarChart>
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
                Java(version ~8)
              </Typography>
              <Chip label="Spring Framework, Spring Boot" className={classes.blue} />
              <Chip label="Play Framework" className={classes.purple} />
              <Chip label="JUnit" className={classes.blue} />
            </div>
            <div className={classes.categoryBlock}>
              <Typography variant="subtitle2">
                PHP(version ~7.0)
              </Typography>
              <Chip label="CakePHP" className={classes.blue} />
              <Chip label="Zend Framework" className={classes.pink} />
              <Chip label="Symfony" className={classes.pink} />
              <Chip label="FuelPHP" className={classes.pink} />
              <Chip label="Laravel" className={classes.pink} />
              <Chip label="PHPUnit" className={classes.blue} />
            </div>
            <div className={classes.categoryBlock}>
              <Typography variant="subtitle2">
                Ruby(version ~1.9)
              </Typography>
              <Chip label="Rails (version 3.2)" className={classes.blue} />
              <Chip label="RSpec" className={classes.blue} />
              <Chip label="Cucamber" className={classes.blue} />
            </div>
            <div className={classes.categoryBlock}>
              <Typography variant="subtitle2">
                Databases and Others
              </Typography>
              <Chip label="MySQL" className={classes.blue} />
              <Chip label="PostgreSQL" className={classes.pink} />
              <Chip label="MongoDB" className={classes.pink} />
              <Chip label="memcached" className={classes.pink} />
              <Chip label="redis" className={classes.pink} />
              <Chip label="Apache Solar" className={classes.blue} />
              <Chip label="bash" className={classes.blue} />
            </div>
          </div>
        </Modal>
      </GridItem>
    );
  };
}

Backend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(skillsetPageStyle)(Backend);