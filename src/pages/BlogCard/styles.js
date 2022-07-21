import { makeStyles } from "@material-ui/core";

const overlineClass = {
  fontFamily: "Roboto",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  textAlign: "left",
}

const titleClass = {
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  textAlign: "left",
}

const bodyClass = {
  fontFamily: "Roboto",
  fontStretch: "normal",
  fontStyle: "normal",
  textSlign: "left",
  fontWeight: "normal",
}
export const lightTheme = makeStyles({
  overline: {
    color: "#333",
    ...overlineClass,
  },
  titleClass: {
    color: "#000",
    ...titleClass,
  },
  bodyClass: {
    color: "#333",
    ...bodyClass,
  },
  linkClass: {
    color: "#000",
  },

});

export const DarkTheme = makeStyles({
  overline: {
    color: "#f2f2f2",
    ...overlineClass,
  },
  titleClass: {
    color: "#fff",
    ...titleClass,
  },
  bodyClass: {
    color: "#f2f2f2",
    ...bodyClass,
  },
  linkClass: {
    color: "#fff",
  },
});

export const dimentionsClass = makeStyles({
  normalOverline: {
    fontSize: "18.4px",
    lineHeight: 1.71,
    letterSpacing: "0.66px",
  },
  responsiveOverline: {
    fontSize: "12px",
    lineHeight: 1.16,
    letterSpacing: "0.29px",
  },
  normalTitle: {
    fontSize: "21px",
    lineHeight: 1.09,
    letterSpacing: "0.13px",
  },
  responsiveTitle: {
    fontSize: "14px",
    lineHeight: 0.99,
    letterSpacing: "0.06px",
  },
  normalBody: {
    fontSize: "14.5px",
    lineHeight: 1.45,
    letterSpacing: "0.66px",
  },
  responsiveBody: {
    fontSize: "12px",
    lineHeight: 1.33,
    letterSpacing: "0.4px",
  },
  normalBlueBoxTitle: {
    width: "3px",
    height: "40px",
    margin: "0 16px 0 0",
    backgroundColor: "#2d9cdb",
  },
  responsiveBlueBoxTitle: {
    width: "3px",
    height: "20px",
    margin: "0 5px 0 0",
    backgroundColor: "#2d9cdb",
  }
});
