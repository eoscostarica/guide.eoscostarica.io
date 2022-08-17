/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, { useEffect, useState } from 'react'
 import clsx from 'clsx';
 import { useColorMode } from '@docusaurus/theme-common';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import styles from './styles.module.css';
 import whiteLogo from '../../../static/img/eoscostarica-logo.png'
 import blackLogo from '../../../static/img/eos-logo-dark.png'
 import { Box, Grid, Container, Link} from '@material-ui/core';
 import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
 import { BsMedium } from "react-icons/bs";
  
 const FooterLogo = ({ url, alt }) => (
   <img className="footer__logo" alt={alt} src={url} width='140' height='100' loading="lazy" />
 );
 
 function Footer() {
   const context = useDocusaurusContext();
   const { siteConfig = {} } = context;
   const { themeConfig = {} } = siteConfig;
   const { footer } = themeConfig;
   const { copyright, logo = {} } = footer || {};
   const [logoUrl, setLogoUrl] = useState(useBaseUrl(logo.src));
   const { colorMode } = useColorMode();
  
   if (!footer) {
     return null;
   }
 
   useEffect(() => {
     if (colorMode === 'dark')
       setLogoUrl(whiteLogo)
     else
       setLogoUrl(blackLogo)
   }, [colorMode]);
 
   return (
     <Box className={clsx('styles.footerLight', styles.bordertop, {'styles.footerDark': footer.style === 'dark'})}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid container >
              <Grid item xs={12} sm={3}>
               <Box align='center' className={styles.footerLogo}>
                 <a href={logo.href}>
                   <FooterLogo alt={logo.alt} url={logoUrl} />
                 </a>
                 {copyright ? <div>Copyright &reg; {new Date().getFullYear()}  <a title="Edenia Web3 Development" href="https://edenia.com" target="_blank">EDENIA</a></div> : null}
                </Box>
             </Grid>
              <Grid item xs>
               <Box className={styles.lineas}>
                 <Grid container >
                    <Grid item xs>
                     <Box className={styles.borderleft}>
                       <Box>
                       <h4>EOS Costa Rica</h4>
                       </Box>
                       <Box>
                         <Link href="https://guide.eoscostarica.io/docs/engineering-culture" color="inherit">
                          Engineering Culture
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://guide.eoscostarica.io/docs/open-source-projects" color="inherit">
                           Open Source Projects
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://guide.eoscostarica.io/docs/open-source-guidelines" color="inherit">
                           Open Source Guidelines
                         </Link>
                       </Box>
                     </Box>
                   </Grid>
                   <Grid item xs>
                     <Box className={styles.bordermid}>
                       <Box>
                        <h4>Community</h4>
                        </Box>
                       <Box>
                         <Link href="https://www.meetup.com/es/EOS-Costa-Rica/" color="inherit">
                           Meetup
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://t.me/eoscr" color="inherit">
                           Telegram Channel
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://github.com/eoscostarica/" color="inherit">
                           GitHub
                         </Link>
                       </Box>
                     </Box>
                   </Grid>
                   <Grid item xs>
                     <Box className={styles.borderRight}>
                       <Box>
                       <h4>More</h4>
                       </Box>
                       <Box>
                         <Link href="https://www.linkedin.com/company/eoscostarica/" color="inherit">
                           Linkedin
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://eoscostarica.medium.com/" color="inherit">
                           Medium
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://twitter.com/eoscostarica" color="inherit">
                           Twitter
                         </Link>
                       </Box>
                     </Box>
                   </Grid>
                  </Grid>
                </Box>
             </Grid>             
              <Grid item xs={12} sm={3}>
               <Box className={styles.contentSocial}>
                 <Grid container spacing={0} >
                   <Grid item xs={2} sm={4} > 
                     <AiFillGithub size={40} onClick={()=> window.open("https://github.com/eoscostarica/")}/>
                   </Grid>
                   <Grid item xs={2} sm={4} >
                     <AiFillLinkedin size={40} onClick={()=> window.open("https://www.linkedin.com/company/eoscostarica/")}/>
                   </Grid>
                   <Grid item xs={2} sm={4} >
                     <AiOutlineTwitter size={40} onClick={()=> window.open("https://twitter.com/eoscostarica")} />
                   </Grid>
                   <Grid item xs={2} sm={4} >
                     <BsMedium size={40} onClick={()=> window.open("https://eoscostarica.medium.com/")}/>
                   </Grid>
                   <Grid item xs={2} sm={4} >
                     <AiOutlineInstagram size={40} onClick={()=> window.open("https://www.instagram.com/eoscostarica/")}/>
                   </Grid>
                   <Grid item xs={2} sm={4} >
                     <AiFillYoutube size={40} onClick={()=> window.open("https://www.youtube.com/c/EOSCostaRica")}/>
                   </Grid>
                 </Grid>
               </Box>
             </Grid>
            </Grid>
          </Grid>
        </Container>
     </Box>
   );
 }
 export default Footer;