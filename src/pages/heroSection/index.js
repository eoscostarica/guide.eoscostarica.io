import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import "../../css/homepage.css"
import ImagesCarousel from "./ImagesCarousel";


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

const useStyles = makeStyles(theme => ({
  textButton: {

    fontSize: "12px",
    ...textButtoClass,
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up('md')]: {
      fontSize: "16px",
    },
  },
  button: {
    ...buttonClass,
    height: "31.6px",
    width: "125px",
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
      height: "40px",
      width: "150px",
      bottom: 10,
    },
    [theme.breakpoints.up('md')]: {
      height: "50px",
      width: "180px",
    }
  },

  textTitleImage: {
    marginTop: "16px",
    fontSize: "32px",
    ...textTitleImageClass,
    [theme.breakpoints.up('sm')]: {
      fontSize: "45px",
    }, [theme.breakpoints.up('md')]: {
      marginTop: "36px",
      fontSize: "70px",
    },
  },
  textSubtitleImage: {
    fontSize: "18px",
    ...textSubtitleImageClass,
    [theme.breakpoints.up('sm')]: {
      fontSize: "25px",
    }, [theme.breakpoints.up('md')]: {
      fontSize: "48px",
    },
  },
  textImage: {
    fontSize: "12px",
    paddingRight: '3vw',
    paddingLeft: '3vw',
    ...textImageClass,
    [theme.breakpoints.up('sm')]: {
      marginTop: "12px",
      fontSize: "18px",
      fontWeight: 300,
      paddingRight: '6vw',
      paddingLeft: '6vw',
    }, [theme.breakpoints.up('md')]: {
      marginTop: "18px",
      fontSize: "24px",
      fontWeight: "normal",
      paddingRight: '100px',
      paddingLeft: '100px',
    },
  },
  dot: {
    height: "5px",
    width: "5px",
    ...dotClass,
    [theme.breakpoints.up('sm')]: {
      height: "7px",
      width: "7px",

    }, [theme.breakpoints.up('md')]: {
      height: "10px",
      width: "10px",
    }
  },


}));

const imagesList = [
  {
    background: "/img/cards-icons/Hero-1.webp",
    displayImg: "block",
  },
  {
    background: "/img/cards-icons/Hero-2.webp",
    displayImg: "none",
  },
  {
    background: "/img/cards-icons/EOS-Previews-2.webp",
    displayImg: "none",
  },
];

const HeroSection = () => {

  const { textButton, button, textTitleImage, textSubtitleImage, textImage, dot } = useStyles();


  return (
    <Box width="100%" position="relative" >
      {imagesList.map(({ background, displayImg }, index) => (
        <ImagesCarousel
          key={background}
          background={background}
          index={index}
          displayImg={displayImg}
        />
      ))}

      <Box position="absolute" top="0" width="100%">
        <Typography className={textTitleImage}>EOS Costa Rica</Typography>
        <Typography className={textSubtitleImage}>Developers Guide</Typography>
        <Typography className={textImage}>
          Welcome to our web3 developers portal. Begin your journey to learn
          about blockchain technology and all the stuff that makes it possible.
        </Typography>

      </Box>
        <Box display="flex" justifyContent="center" width="100%" position="absolute" bottom={30}>
          <Button className={button} href="/docs/engineering-culture">
            <Typography className={textButton}>GET STARTED</Typography>
          </Button>
        </Box>

      <Box
        position="absolute"
        display="flex"
        justifyContent="center"
        width="100%"
        bottom={16}
      >
        <Box className={`dot ${dot}`} />
        <Box className={`dot ${dot}`} />
        <Box className={`dot ${dot}`} />
      </Box>

    </Box>
  );
};

export default HeroSection;