import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from "@material-ui/core/Typography";
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from "clsx";
import { Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useColorMode } from "@docusaurus/theme-common";

import "../../css/homepage.css";

const globalClass = { fontFamily: "Roboto", textSlign: "left" };
/**Dark classes */
const darkMode = makeStyles({
    imgCardColorClass: { filter: "brightness(0) invert(1)" },
    overlineColorClass: { color: "#f2f2f2" },
    bodyColorClass: { color: "#f2f2f2" },
    linkColorClass: { color: "#fff", textDecoration: "none" },
    titleColorClass: { color: "#fff" },
    cardImgContainerColorClass: { background: "#1b1b1d", borderColor: "#f2f2f2" },
});

/**Light classes */
const lightMode = makeStyles({
    overlineColorClass: { color: "#333" },
    titleColorClass: { color: '#000' },
    bodyColorClass: { color: "#333" },
    linkColorClass: { color: "#000", textDecoration: "none" },
});

const useStyles = makeStyles(theme => ({
    titleClass: {
        ...globalClass,
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: 0.99,
        letterSpacing: "0.06px",
        [theme.breakpoints.up(400)]: {
            fontSize: "21px",
            lineHeight: 1.5,
            letterSpacing: "0.13px",
            fontWeight: "bold",
        }, [theme.breakpoints.up("md")]: {
            fontWeight: "bold",
        }
    },
    bodyClass: {
        ...globalClass,
        fontSize: "12px",
        lineHeight: 1.33,
        letterSpacing: "0.4px",
        [theme.breakpoints.up(400)]: {
            fontSize: "14.5px",
            lineHeight: 1.45,
            letterSpacing: "0.66px",
        }
    },
}));

const CustomCard = ({ img, href, title, body }) => {
    const { colorMode } = useColorMode();

    const smDown = useMediaQuery('(max-width:400px)');

    const { titleClass, bodyClass } = useStyles();
    const {
        imgCardColorClass,
        overlineColorClass,
        bodyColorClass,
        linkColorClass,
        titleColorClass,
        cardImgContainerColorClass
    } = colorMode === "dark" ? darkMode() : lightMode();
    return (
        <Box
            className="cardroot"
            border={1}
            width={smDown ? "256px" : "360px"}
            height={smDown ? "140px" : "240px"}
            marginBottom={smDown ? "8px" : "0"}
        >
            <Box className={`card-img-container ${cardImgContainerColorClass}`}>
                <Box component="img" className={`card-img ${imgCardColorClass}`} src={useBaseUrl(img)} loading="lazy" />
            </Box>

            <Box
                borderBottom={1}
                display="flex"
                alignItems="center"
                width="100%"
                //bgcolor={colorMode === "dark" ? "#4f4f4f" : "#f2f2f2"}
                className="header-transition"
            >
                <Box ml={smDown ? 1 : 2}>
                    <Typography id="header-title" className={overlineColorClass} >
                        SECTION
                    </Typography>
                </Box>
            </Box>

            <Box mt={smDown ? 1 : 2} ml={smDown ? 1 : 2} mr={1} maxWidth="70%">
                <Typography className={clsx(titleClass, titleColorClass)} >
                    {title}
                </Typography>
            </Box>
            <Box mt={smDown ? 1 : 2} ml={smDown ? 1 : 2} mr={1}>
                <Typography className={clsx(bodyClass, bodyColorClass)} >
                    {body}
                </Typography>
            </Box>

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
                        className={linkColorClass}
                        href={useBaseUrl(href)}
                        underline="none"
                        style={{ textDecoration: "none" }}
                    >
                        READ MORE
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default CustomCard;
