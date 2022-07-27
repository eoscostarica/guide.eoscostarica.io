import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import { Box, Link, useMediaQuery } from "@material-ui/core";
import { useColorMode } from "@docusaurus/theme-common";

import "../../css/homepage.css";
import { makeStyles } from "@material-ui/core";

const lightTheme = makeStyles({
    overlineColor: { color: "#333" },
    titleColor: { color: "#000" },
    bodyColor: { color: "#333" },
    linkColor: { color: "#000" },
});

const DarkTheme = makeStyles({
    overlineColor: { color: "#f2f2f2" },
    titleColor: { color: "#fff" },
    bodyColor: { color: "#f2f2f2" },
    linkColor: { color: "#fff" },
});

const dimentionsClass = makeStyles(theme => ({
    overlineClass: {
        fontFamily: "Roboto",
        fontSize: "12px",
        lineHeight: 1.16,
        letterSpacing: "0.29px",
        [theme.breakpoints.up(400)]: {
            fontSize: "18.4px",
            lineHeight: 1.71,
            letterSpacing: "0.66px",
        }
    },
    titleClass: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: 0.99,
        letterSpacing: "0.06px",
        [theme.breakpoints.up(400)]: {
            fontSize: "21px",
            lineHeight: 1.09,
            letterSpacing: "0.13px",
        }
    },
    bodyClass: {
        fontFamily: "Roboto",
        fontSize: "12px",
        lineHeight: 1.33,
        letterSpacing: "0.4px",
        [theme.breakpoints.up(400)]: {
            fontSize: "14.5px",
            lineHeight: 1.45,
            letterSpacing: "0.66px",
        }
    },
    blueBoxTitleClass: {
        width: "3px",
        height: "20px",
        margin: "0 5px 0 0",
        backgroundColor: "#2d9cdb",
        [theme.breakpoints.up(400)]: {
            width: "3px",
            height: "40px",
            margin: "0 16px 0 0",
            backgroundColor: "#2d9cdb",
        }
    },
}));

const CustomCard = ({ title, body, href, img }) => {
    const { colorMode } = useColorMode();
    const smDown = useMediaQuery("(max-width:400px)");
    const { overlineColor, titleColor, bodyColor, linkColor } = colorMode === "dark" ? DarkTheme() : lightTheme();
    const { overlineClass, titleClass, bodyClass, blueBoxTitleClass } = dimentionsClass();

    return (
        <Box
            border={1}
            width={smDown ? "256px" : "360px"}
            height={smDown ? "300px" : "412px"}
            className="cardroot"
            marginBottom={smDown ? "8px" : "0"}
        >

            <Box
                component="img"
                src={useBaseUrl(img)}
                loading="lazy"
                width="100%"
                borderBottom={1}
            />
            <Box height="196px">
                <CardContent>
                    <Typography className={clsx(overlineClass, overlineColor)} >
                        ARTICLES
                    </Typography>
                    <Box display="flex" alignItems="center" mt={smDown ? 1 : 2} >
                        <Box className={blueBoxTitleClass} />
                        <Typography className={clsx(titleClass, titleColor)} >
                            {title}
                        </Typography>
                    </Box>
                    <Box mt={smDown ? 1 : 2}>
                        <Typography className={clsx(bodyClass, bodyColor)} >
                            {body}
                        </Typography>
                    </Box>
                </CardContent>
                <Box
                    display="flex"
                    position="absolute"
                    bottom={0}
                    width="100%"
                    justifyContent="center"
                    marginBottom={smDown ? 1 : 2}
                >
                    <Box position="relative" id="box-link-id-customCard">
                        <Link
                            id="link-id-customCard"
                            href={href}
                            className={linkColor}
                            style={{ textDecoration: "none" }}
                        >
                            READ MORE
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default CustomCard;
