import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";

import { CustomArticle } from "./CustomArticle";

import "../../css/homepage.css";

const articlesList = [
  {
    title: "Get to Know EOS Costa Rica",
    body: "Learn more about our history, team and projects we carry out.",
    href: "https://medium.com/@eoscostarica/get-to-know-eos-costa-rica-f91f5b0bb7c4",
    //img: "https://miro.medium.com/max/700/1*x7OW2wAhH1YapNVZl_-SEA.png"
    img: "/img/cards-icons/blog1.png"
  },
  {
    title: "You Should Participate in an Open-Source Project",
    body: "We show some important aspects for which it should be dealt with in open source projects.",
    href: "https://medium.com/@eoscostarica/you-should-participate-in-an-open-source-project-c259f8759d41",
    //img: "https://miro.medium.com/max/875/1*_eTme4t7HJfE7aeeyd3kxQ.jpeg"
    img: "/img/cards-icons/blog2.png"
  },
  {
    title: "What Is Blockchain?",
    body: "We explain, with examples, what a blockchain is and how it works.",
    href: "https://medium.com/@eoscostarica/what-is-blockchain-an-introduction-9535ed3e6005",
    //img: "https://miro.medium.com/max/875/1*ohmD1qq4dAUOu4G-gXtaqA.jpeg"
    img: "/img/cards-icons/blog3.png"
  }
]

export const MediumSection = () => {
  const smDown = useMediaQuery('(max-width:400px)')
  const mdDown = useMediaQuery('(max-width:800px)')

  return (
    <Box className="container" mt={smDown ? 3 : mdDown ? 7 : 10} mb={smDown ? 3 : 8} >

      <Box display="flex" mb={smDown ? 2 : mdDown ? 5 : 8} alignItems="center">
        <Box className="box-title-startResource" />
        <Typography id="section-title-startResource-id">Read our blog posts</Typography>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={smDown ? 1 : 3}
      >
        {
          articlesList.map(({ title, body, href, img }) =>
            <Grid key={title} item xs={12} sm={6} md={6} lg={4} container display="flex" justifyContent="center">
              <CustomArticle
                title={title}
                body={body}
                href={href}
                img={img}
              ></CustomArticle>
            </Grid>
          )
        }
      </Grid>
    </Box>
  );
};