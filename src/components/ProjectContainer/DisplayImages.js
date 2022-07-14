import React from 'react';
import { Grid } from '@material-ui/core';
import useBaseUrl from '@docusaurus/useBaseUrl';

const DisplayImages = ({ projectData }) => {
    return (
        <Grid item md={4} xs={12}>
            <Grid className="container-border">
                {projectData.logos.map((logo, i) => (
                    <Grid container key={i}>
                        <a href={logo.link}><img className="logo" src={useBaseUrl(logo.image)}
                            loading="lazy" alt={projectData.name + " logo"} />
                        </a>
                    </Grid>
                ))
                }
                {projectData.images.map((image, i) => (
                    <>
                        <a href={image.link} id={i}>
                            <img className={image.class} src={useBaseUrl(image.image)}
                                loading="lazy" alt={projectData.name + " screenshot preview " + (i + 1)} />
                        </a>
                        <a href={projectData.href} className="lightbox" id={image.id}>
                            <img className="box-img" src={useBaseUrl(image.image)}
                                loading="lazy" alt={projectData.name + " screenshot fullsize " + (i + 1)} />
                        </a>
                    </>
                ))
                }
            </Grid>
        </Grid>
    )
}

export default DisplayImages