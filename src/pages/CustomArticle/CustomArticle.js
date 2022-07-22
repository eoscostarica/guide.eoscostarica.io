import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box, Link, useMediaQuery } from "@material-ui/core";
import { useColorMode } from "@docusaurus/theme-common";

import "../../css/homepage.css";
import { DarkTheme, lightTheme, dimentionsClass } from "./styles";

export const CustomArticle = ({ title, body, href, img }) => {
  const smDown = useMediaQuery("(max-width:400px)");
  const { colorMode } = useColorMode();
  const { overline, titleClass, linkClass, bodyClass } =
    colorMode === "dark" ? DarkTheme() : lightTheme();
  const {
    normalOverline,
    normalTitle,
    normalBody,
    responsiveOverline,
    responsiveTitle,
    responsiveBody,
    responsiveBlueBoxTitle,
    normalBlueBoxTitle,
  } = dimentionsClass();

  return (
    <Box
      border={1}
      width={smDown ? "256px" : "360px"}
      height={smDown ? "300px" : "412px"}
      className="cardroot"
      marginBottom={smDown ? "8px" : ""}
    >
      <Box>
        <img
          src={useBaseUrl(img)}
          loading="lazy"
          width="100%"
          id="imgBorderBottom-id"
        />
      </Box>
      <Box height="196px">
        <CardContent>
          <Typography
            className={`${overline} ${
              smDown ? responsiveOverline : normalOverline
            }`}
            gutterBottom
          >
            ARTICLES
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            mt={smDown ? 1 : 2}
            maxWidth={smDown ? "195px" : "240px"}
          >
            <Box
              className={smDown ? responsiveBlueBoxTitle : normalBlueBoxTitle}
            />
            <Typography
              className={`${titleClass} ${
                smDown ? responsiveTitle : normalTitle
              }`}
            >
              {title}
            </Typography>
          </Box>
          <Box mt={smDown ? 1 : 2}>
            <Typography
              className={`${bodyClass} ${smDown ? responsiveBody : normalBody}`}
              variant="body2"
              component="p"
            >
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
              style={{ textDecoration: "none", cursor: "pointer" }}
              className={linkClass}
            >
              READ MORE
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
