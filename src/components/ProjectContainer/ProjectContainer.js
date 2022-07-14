import React from 'react';
import { Grid } from '@material-ui/core';

import DisplayImages from './DisplayImages'

const ProjectContainer = ({ projectData }) => {

    const hasImages = projectData.images?.length > 0
    const gitIcon = 'https://cdn-icons-png.flaticon.com/32/25/25231.png'

    return (
        <Grid container>
            <Grid item md={hasImages ? 8 : 12} xs={12}>
                <Grid className="content">
                    {projectData.description && projectData.description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                    {projectData.website && projectData.website.map((web, i) => (
                        <ul key={i}><li>
                            <p><strong>{web.title}: </strong>
                                { web.image ? (
                                    <a href={web.link}>
                                        <img src={web.image} width="9%" alt={projectData.name + " website icon"} loading="lazy"/>
                                    </a>
                                ) : (
                                    <a href={web.link}>{web.name}</a>
                                )}
                            </p>
                        </li></ul>
                    ))}
                    {projectData.github && projectData.github.map((git, i) => (
                        <ul key={i}><li>
                            <p><strong>GitHub: </strong>
                                <a href={git.link}><img src={git.image ? git.image : gitIcon} loading="lazy" 
                                width="32px" height="32px" alt={"Link to "+projectData.name+" Github repository"}/></a>
                            </p>
                        </li></ul>
                    ))}
                </Grid>
            </Grid>
            { hasImages && projectData.logos &&
                <DisplayImages projectData={projectData}/>
            }
        </Grid>
    )
}

export default ProjectContainer