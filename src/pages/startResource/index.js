

import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CustomCard from './CustomCard';
import "../../css/homepage.css"

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
    
    const smDown = useMediaQuery('(max-width:400px)')
    const mdDown = useMediaQuery('(max-width:800px)')
        
    return (
        <Box className="container">
            <Box display="flex" mb={smDown ? 2 : mdDown ? 5 : 8} alignItems="center"></Box>
            <Box mb={smDown ? 2 : 6} mt={smDown ? 0 : mdDown ? 2 : 4} display="flex" alignItems="center">
                <Box className="box-title-startResource" />
                <Typography variant="h1" id="section-title-startResource-id">
                    Get started with these resources
                </Typography>
            </Box>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={smDown ? 1 : 3}
            >
                {
                    startResourceList.map(item =>
                        <Grid key={item.title} item xs={12} sm={6} md={6} lg={4} container display="flex" justifyContent="center">
                            <CustomCard
                                title={item.title}
                                body={item.body}
                                href={item.href}
                                img={item.img}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
}

export default StartResourceSection;
