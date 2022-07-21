import { makeStyles } from "@material-ui/core/styles";

const dotClass = {
  margin: "0 4px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
  transition: "background-color 0.6s ease",
}

const textButtoClass = {
  fontFamily: "Roboto",
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.43,
  letterSpacing: "0.1px",
  textAlign: "center",
  color: '#fff',
}

const buttonClass = {
  padding: "10px 24px",
  borderRadius: "100px",
  backgroundColor: "#2d9cdb",
  "&:hover": {
    backgroundColor: "#7ACAF0",
  }
}

const textImageClass = {
  fontFamily: "Roboto",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: '#fff',
}

const textSubtitleImageClass = {
  fontFamily: "Roboto",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: '#fff',
  fontWeight: 500,
}

const textTitleImageClass = {
  fontFamily: "Roboto",
  fontWeight: 600,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "normal",
  textAlign: "center",
  color: '#fff',
}

export const heroStyles = makeStyles({
  textButton: {
    fontSize: "16px",
    ...textButtoClass,
  },
  button: {
    height: "50px",
    width: "180px",
    ...buttonClass,
  },
  textTitleImage: {
    fontSize: "5vw",
    ...textTitleImageClass,
  },
  textSubtitleImage: {
    fontSize: "3vw",
    ...textSubtitleImageClass,
  },
  textImage: {
    fontSize: "1.8vw",
    fontWeight: "normal",
    paddingRight: '15vw',
    paddingLeft: '15vw',
    ...textImageClass,
  },
  dot: {
    height: "10px",
    width: "10px",
    ...dotClass,
  }
});

export const heroSmStyles = makeStyles({
  textButton: {
    fontSize: "12px",
    ...textButtoClass,
  },
  button: {
    height: "31.6px",
    width: "125px",
    ...buttonClass,
  },
  textTitleImage: {
    fontSize: "32px",
    ...textTitleImageClass,
  },
  textSubtitleImage: {
    fontSize: "18px",
    ...textSubtitleImageClass,
  },
  textImage: {
    fontSize: "12px",
    fontWeight: 300,
    paddingRight: '3vw',
    paddingLeft: '3vw',
    ...textImageClass,
  },
  dot: {
    height: "5px",
    width: "5px",
    ...dotClass,
  }
});

export const heroMdStyles = makeStyles({
  textButton: {
    fontSize: "12px",
    ...textButtoClass,
  },
  button: {
    height: "31.6px",
    width: "125px",
    ...buttonClass,
  },
  textTitleImage: {
    fontSize: "6vw",
    ...textTitleImageClass,
  },
  textSubtitleImage: {
    fontSize: "3.5vw",
    ...textSubtitleImageClass,
  },
  textImage: {
    fontSize: "15px",
    fontWeight: 300,
    paddingRight: '6vw',
    paddingLeft: '6vw',
    ...textImageClass,
  },
  dot: {
    height: "7px",
    width: "7px",
    ...dotClass
  }
});

export const useStyles = makeStyles(theme => ({

  fade: {
    animation: `$fade 1.8s ${theme.transitions.easing.easeInOut} `,
  },
  "@keyframes fade": {
    from: { opacity: .4 },
    to: { opacity: 1 }
  },
  numbertext: {
    fontFamily: "Roboto",
    color: "#f2f2f2",
    fontSize: "12px",
    padding: "8px 12px",
    position: "absolute",
    top: 0,
  },
}));
