import { makeStyles } from "@material-ui/core";

const titleClass = {
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "left",
}
const bodyClass = {
    fontFamily: "Roboto",
    textSlign: "left",
}

export const lightTheme = makeStyles({

    overline: {
        color: "#333",
    }
    ,
    titleClass: {
        color: '#000',
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

    imgCard: {
        filter: "brightness(0) invert(1)",
    },
    cardImgContainer: {
        background: "#1b1b1d",
        borderColor: "#f2f2f2",
    },
    overline: {
        color: "#f2f2f2"
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
    normalTitle: {
        fontSize: "21px",
        lineHeight: 1.5,
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
});