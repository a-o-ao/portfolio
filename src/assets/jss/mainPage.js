import { container, title } from "assets/jss/material-kit-react/material-kit-react.jsx";

const mainPageStyle = {
    container: {
      zIndex: "12",
      color: "#FFFFFF",
      ...container
    },
    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      color: "#FFFFFF",
      textDecoration: "none",
      fontFamily: "'Bree Serif', serif",
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      margin: "10px auto 0"
    },
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      // TODO MOBILE 30->0
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    iconImage: {
      paddingRight: "10px"
    },
  };
  
  export default mainPageStyle;