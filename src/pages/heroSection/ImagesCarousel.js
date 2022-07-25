import React, { useEffect } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../css/homepage.css";

const useStyles = makeStyles(theme => ({

  fade: {
    animation: `$fade 1.8s ${theme.transitions.easing.easeInOut} `,
  },
  "@keyframes fade": {
    from: { opacity: .4 },
    to: { opacity: 1 }
  },
  numberText: {
    fontFamily: "Roboto",
    color: "#f2f2f2",
    fontSize: "12px",
    padding: "8px 12px",
    position: "absolute",
    top: 0,
  }, imgDimentions: {
    height: "175px",
    [theme.breakpoints.up("sm")]: {
      height: "250px",
    },
    [theme.breakpoints.up("md")]: {
      height: "360px",
    }
  }

}));

class Carousel {
  constructor() {
    this.slideIndex = 0;
    this.animation = null;
  }
  start() {
    this.animation = setInterval(() => {
      let i;
      let slides = document.getElementsByClassName("slideClass");
      let dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "";
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].style.backgroundColor = "#2d9cdb";
    }, 6000);
  }
  stop() {
    clearInterval(this.animation);
  }
}

const ImagesCarousel = ({ background, index, displayImg }) => {
  const { fade, numberText, imgDimentions } = useStyles();

  useEffect(() => {
    const carousel = new Carousel();
    carousel.start();
    return () => carousel.stop();
  }, []);

  return (
    <Box key={background} className={`slideClass ${fade}`} display={displayImg}>
      <Box className={numberText}>{index + 1} / 3</Box>
      <Box className={imgDimentions} component="img" id="imgCarousel-id" src={useBaseUrl(background)} width="100%" />
    </Box>
  );
};

export default ImagesCarousel;