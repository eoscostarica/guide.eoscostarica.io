import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { heroStyles, heroMdStyles, heroSmStyles } from "./styles";
import { ImagesCarousel } from "./ImagesCarousel";

const imagesList = [
  {
    background: "/img/cards-icons/EOS-Previews-2.jpg",
  },
  {
    background: "/img/cards-icons/Hero-1.jpg",
  },
  {
    background: "/img/cards-icons/Hero-2.jpg",
  },
];

export const HeroSection = () => {
  const xsDown = useMediaQuery("(max-width:400px)");
  const smDown = useMediaQuery("(max-width:600px)");
  const mdDown = useMediaQuery("(max-width:900px)");
  const {
    button,
    textButton,
    textTitleImage,
    dot,
    textSubtitleImage,
    textImage,
  } = smDown ? heroSmStyles() : mdDown ? heroMdStyles() : heroStyles();

  return (
    <Box width="100%" position="relative">
      {imagesList.map(({ background }, index) => (
        <ImagesCarousel
          key={background}
          background={background}
          index={index}
        />
      ))}
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={mdDown ? "160px" : "20vw"}
      >
        <Typography className={textTitleImage}>EOS Costa Rica</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={xsDown ? "140px" : mdDown ? "136px" : "17vw"}
      >
        <Typography className={textSubtitleImage}>Developers Guide</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={mdDown ? "95px" : "12vw"}
      >
        <Typography className={textImage}>
          Welcome to our open-source developers portal. Begin your journey to
          learn about blockchain technology and all the stuff that makes it
          possible.
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        position="absolute"
        bottom={mdDown ? "55px" : "6vw"}
      >
        <Button className={button} href="/docs/engineering-culture">
          <Typography className={textButton}>GET STARTED</Typography>
        </Button>
      </Box>
      <br />
      <Box
        display="flex"
        justifyContent="center"
        position="absolute"
        bottom={40}
        width="100%"
      >
        <Box className={`dot ${dot}`} />
        <Box className={`dot ${dot}`} />
        <Box className={`dot ${dot}`} />
      </Box>
    </Box>
  );
};
