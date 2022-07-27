import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Box, Grid, useMediaQuery } from "@material-ui/core";

import "../css/homepage.css";

class Carousel {
  constructor() {
    this.slideIndex = 0;
    this.animation = null;
    this.slides = document.getElementsByClassName("mySlides");
    this.dots = document.getElementsByClassName("dot");
  }
  start() {
    this.animation = setInterval(() => {

      let i;

      for (i = 0; i < this.slides.length; i++) {
        this.slides[i].style.display = "none";
      }
      this.slideIndex++;
      if (this.slideIndex > this.slides.length) {
        this.slideIndex = 1;
      }
      for (i = 0; i < this.dots.length; i++) {
        this.dots[i].style.backgroundColor = "";
      }
      this.slides[this.slideIndex - 1].style.display = "block";
      this.dots[this.slideIndex - 1].style.backgroundColor = "#2d9cdb";
    }, 6000);
  }
  stop() {
    clearInterval(this.animation);
  }
}

const imagesList = [
  { background: "/img/cards-icons/Hero-1.webp" },
  { background: "/img/cards-icons/Hero-2.webp" },
  { background: "/img/cards-icons/Hero-3.webp" }
];

const HeroSection = () => {
  useEffect(() => {
    document.getElementsByClassName("mySlides")[0].style.display = "block";
    const carousel = new Carousel();
    carousel.start();
    return () => carousel.stop();
  }, []);
  return (
    <Box className="carouselContainer" >
      {imagesList.map(({ background }, index) => (
        <Box key={background} className="mySlides fade">
          <Box className="numberImagetext">{index + 1} / 3</Box>
          <img alt={background} src={useBaseUrl(background)} width="100%" className="imgHero" />
        </Box>
      ))}
      <h1 className="textImgTitle">EOS Costa Rica</h1>
      <h2 className="textSubTitleImg">Developers Guide</h2>
      <h3 className="textImg">
        Welcome to our web3 developers portal. Begin your journey to learn
        about blockchain technology and all the stuff that makes it possible.
      </h3>
      <Box className="buttonHeroContainer">
        <a className="buttonHero" style={{ textDecoration: "none" }} href="/docs/engineering-culture">GET STARTED</a>
      </Box>
      <Box className="dotContainer" >
        <Box className="dot" />
        <Box className="dot" />
        <Box className="dot" />
      </Box>
    </Box>
  );
};

const startResourceList = [
  {
    title: "Developer Guidelines",
    body: "General guidelines for open source development.",
    href: "/docs/open-source-guidelines",
    img: "/img/cards-icons/guidelines.svg",
  }, {
    title: "Learn EOSIO",
    body: "Resources and information to learn about the EOSIO protocol.",
    href: "/docs/eos-learn/eosio-protocol",
    img: "/img/cards-icons/icons-eosio.svg",
  }, {
    title: "Tutorials",
    body: "Support information needed to perform the installation and execution of processes.",
    href: "docs/tutorials/markdown-guide",
    img: "/img/cards-icons/tutorials.svg",
  }, {
    title: "Tools",
    body: "Set of useful tools for the learning process.",
    href: "docs/tools/glossary",
    img: "/img/cards-icons/tools.svg",
  }, {
    title: "Community",
    body: "Links to sites of interest related to the EOS community.",
    href: "docs/community-resources/telegram-channels",
    img: "/img/cards-icons/community.svg",
  }, {
    title: "Open source projects",
    body: "Open source projects developed by EOS Costa Rica.",
    href: "docs/open-source-projects",
    img: "/img/cards-icons/icons-opensource.svg",
  }
];

const StartResourceSection = () => {
  const smDown = useMediaQuery("(max-width:400px)");
  const { colorMode } = useColorMode();
  const [color, setColor] = useState(null);
  useEffect(() => { setColor(colorMode); }, [colorMode]);

  return (
    <>{color &&
      <Box className="container" >
        <Box className="startTitleContainer">
          <Box className="box-title-startResource" />
          <Box className="section-title-startResource">
            Get started with these resources
          </Box>
        </Box>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={smDown ? 1 : 3}>
          {
            startResourceList.map(({ title, body, href, img }) =>
              <Grid key={title} item xs={12} sm={6} lg={4} container display="flex" justifyContent="center">
                <Box className="cardDimentions">
                  <div className={`cardImgContainer ${color === 'dark' ? 'cardImgContainerDark' : 'cardImgContainerLight'}`} >
                    <img src={useBaseUrl(img)} alt={title} loading="lazy" className={`imgHero ${color === 'dark' && 'cardImgColor'}`} />
                  </div>
                  <Box className={`cardHeaderTransition ${color === 'dark' ? 'cardHeaderDark-mode' : 'cardHeaderLight-mode'}`}>
                    <span>SECTION</span>
                  </Box>
                  <h1 className="cardTitle"> {title} </h1>
                  <Box className={`cardBody ${color === 'dark' ? 'darkTextColor' : 'ligthTextColor'}`}> {body}</Box>
                  <a className={`cardLinkFooter ${color === 'dark' ? 'darkTextColor' : 'ligthTextColor'}`} style={{ textDecoration: "none" }} id="box-link-id-customCard" href={href}> READ MORE </a>
                </Box>
              </Grid>
            )
          }
        </Grid>
      </Box>
    }</>
  )
}

const articlesList = [
  {
    title: "Get to Know EOS Costa Rica",
    body: "Learn more about our history, team and projects we carry out.",
    href: "https://medium.com/@eoscostarica/get-to-know-eos-costa-rica-f91f5b0bb7c4",
    img: "/img/cards-icons/blog1.webp",
  }, {
    title: "You Should Participate in an Open-Source Project",
    body: "We show some important aspects for which it should be dealt with in open source projects.",
    href: "https://medium.com/@eoscostarica/you-should-participate-in-an-open-source-project-c259f8759d41",
    img: "/img/cards-icons/blog2.webp",
  }, {
    title: "What Is Blockchain?",
    body: "We explain, with examples, what a blockchain is and how it works.",
    href: "https://medium.com/@eoscostarica/what-is-blockchain-an-introduction-9535ed3e6005",
    img: "/img/cards-icons/blog3.webp",
  },
];

const ArticleSection = () => {
  const smDown = useMediaQuery("(max-width:400px)");
  const { colorMode } = useColorMode();
  const [color, setColor] = useState(null);
  useEffect(() => { setColor(colorMode) }, [colorMode]);
  return (
    <>{color &&
      <Box className="container" id="article-id">
        <Box className="startTitleContainer">
          <Box className="box-title-startResource" />
          <Box className="section-title-startResource"> Read our blog posts </Box>
        </Box>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={smDown ? 1 : 3}>
          {
            articlesList.map(({ title, body, href, img }) =>
              <Grid key={title} item xs={12} sm={6} lg={4} container display="flex" justifyContent="center">
                <Box className={`cardArticleDimentions ${color === 'dark' ? 'darkTextColor' : 'ligthTextColor'}`}>
                  <Box component="img" src={useBaseUrl(img)} alt={title} width="100%" className="cardArticleImg" />
                  <Box className="cardArticleHeader"> ARTICLES </Box>
                  <Box className="cardArticleTitleContainer">
                    <Box className="cardArticleBlueBoxTitle" />
                    <Box className="cardArticleTitle "> {title} </Box>
                  </Box>
                  <Box className={`cardArticleBody ${color === 'dark' ? 'darkTextColor' : 'ligthTextColor'}`}> {body}</Box>
                  <a className={`cardLinkFooter ${color === 'dark' ? 'darkTextColor' : 'ligthTextColor'}`} style={{ textDecoration: "none" }} id="box-link-id-customCard" href={href}> READ MORE </a>
                </Box>
              </Grid>
            )
          }
        </Grid>
      </Box>
    }</>
  )
};

const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HeroSection />
      <StartResourceSection />
      <ArticleSection />
    </Layout>
  );
};

export default HomePage;