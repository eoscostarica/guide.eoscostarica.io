import React, {  useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Box } from "@material-ui/core";

import { useStyles } from './styles';

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
            if (this.slideIndex > slides.length) { this.slideIndex = 1 }
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

export const ImagesCarousel = ({ background, index }) => {

    const { fade, numbertext } = useStyles();

    useEffect(() => {
        const carousel = new Carousel();
        carousel.start();
        return () => carousel.stop();
    }, []);
    
    return (
        <Box key={background} className={`slideClass ${fade}`} display={index > 0 ? "none" : "block"} >
            <Box className={numbertext}>
                {index + 1} / 3
            </Box>
            <img src={useBaseUrl(background)} width="100%" style={{
                minHeight: "175px",
            }} />
        </Box>
    )
}
