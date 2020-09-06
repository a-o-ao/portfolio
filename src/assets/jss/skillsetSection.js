import { title } from "assets/jss/material-kit-react/material-kit-react.jsx";
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';

const skillsetStyle = theme => ({
  section: {
    padding: "40px 0",
    color: "#000"
  },
  gridContent: {
    paddingTop: "20px",
    // TODO width PC: auto mobile: 調査
  },
  title: {
    ...title,
    textAlign: "center",
    fontFamily: "'Bree Serif', serif",
    fontSize: "2em"
  },
  card: {
    minWidth: 275,
  },
  barChart: {
    paddingTop: "30px",
  },
  listItem: {
    paddingTop: "3px",
    paddingBottom: "0",
    fontSize: "12px"
  },
  detail: {
    paddingTop: "10px",
    paddingBottom: "0",
  },
  detailContent: {
    padding: "0 16px",
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    // TODO PC/mobile
    width: "60%",
    overflow: "scroll",
  },
  modal: {
    // TODO PC/mobile
    top: "40%",
    left: "40%",
    transform: "translate(-40%, -40%)",
  },
  categoryBlock: {
    paddingTop: "10px",   
  },
  circle: {
    width: "15px",
    height: "15px",
    display: "inline-block",
    marginRight: "10px",
  },
  blue: {
    backgroundColor: blue[500],
    color: "#fff"
  },
  pink: {
    backgroundColor: pink[500],
    color: "#fff"
  },
  purple: {
    backgroundColor: purple[500],
    color: "#fff"
  },
  proficiencyTooltip: {
    display: "none",
    zIndex: "13",
    position: "absolute",
  }
});
  
export default skillsetStyle;