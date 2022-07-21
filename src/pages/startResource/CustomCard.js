import React from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from "@material-ui/core/Typography";
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from "@docusaurus/theme-common";
import { Box, Link } from "@material-ui/core";

import { DarkTheme, lightTheme, dimentionsClass } from "./styles";

export const CustomCard = ({ img, href, title, body }) => {

  const smDown = useMediaQuery('(max-width:400px)');
  const { colorMode } = useColorMode();

  const { cardImgContainer, imgCard, overline, titleClass, bodyClass, linkClass } = colorMode === "dark" ? DarkTheme() : lightTheme();
  const {
    normalTitle,
    responsiveTitle,
    normalBody,
    responsiveBody
  } = dimentionsClass();

  return (

    <Box className="cardroot" border={1} width={smDown ? "256px" : "360px"} height={smDown ? "140px" : "240px"}
      marginBottom={smDown ? "8px" : ""}
    >
      <div className={`card-img-container ${cardImgContainer}`}>
        <img className={`card-img ${imgCard}`} src={useBaseUrl(img)} loading="lazy" />
      </div>

      <Box
        borderBottom={1}
        display="flex"
        alignItems="center"
        width="100%"
        bgcolor={colorMode === "dark" ? "#4f4f4f" : "#f2f2f2"}
        className="header-transition"
      >
        <Box ml={smDown ? 1 : 2}>
          <Typography id="header-title" className={overline} >
            SECTION
          </Typography>
        </Box>
      </Box>

      <Box mt={smDown ? 1 : 2} ml={smDown ? 1 : 2} mr={1} >
        <Typography className={`${titleClass} ${smDown ? responsiveTitle : normalTitle}`} >
          {title}
        </Typography>
      </Box>
      <Box mt={smDown ? 1 : 2} ml={smDown ? 1 : 2} mr={1}>
        <Typography className={`${bodyClass} ${smDown? responsiveBody : normalBody}`} >
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
            style={{ textDecoration: "none" }}
            className={linkClass}
            href={useBaseUrl(href)}
          >
            READ MORE
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
