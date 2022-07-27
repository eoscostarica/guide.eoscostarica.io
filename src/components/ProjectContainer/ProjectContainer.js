import React from 'react';
import { Grid } from '@material-ui/core';

import DisplayImages from './DisplayImages'
import DisplayLinks from './DisplayLinks'

const ProjectContainer = ({ projectData }) => {

    const hasImages = projectData.images?.length > 0

    return (
        <Grid container>
            <Grid item md={hasImages ? 8 : 12} xs={12}>
                <Grid className="content">
                    {projectData.description && projectData.description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                    <DisplayLinks projectData={projectData}/>
                </Grid>
            </Grid>
            { hasImages && projectData.logos &&
                <DisplayImages projectData={projectData}/>
            }
        </Grid>
    )
}

export default ProjectContainer