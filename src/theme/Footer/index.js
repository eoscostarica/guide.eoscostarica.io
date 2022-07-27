/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, { useEffect, useState } from 'react'
 import clsx from 'clsx';
 
 //import Link from '@docusaurus/Link';
 import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import styles from './styles.module.css';
 import whiteLogo from '../../../static/img/eoscostarica-logo.png'
 import blackLogo from '../../../static/img/eos-logo-dark.png'
 import { Box, Grid, Container, Link, Image } from '@material-ui/core';
 import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
 import { BsMedium } from "react-icons/bs";
 
 
 
 
 
 function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
   const toUrl = useBaseUrl(to);
   const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
 
   return (
     <Link
       className="footer__link-item"
       {...(href
         ? {
           target: '_blank',
           rel: 'noopener noreferrer',
           href: prependBaseUrlToHref ? normalizedHref : href,
         }
         : {
           to: toUrl,
         })}
       {...props}>
       {label}
     </Link>
   );
 }
 
 const FooterLogo = ({ url, alt }) => (
   <img className="footer__logo" alt={alt} src={url} width='140' height='100' loading="lazy" />
 );
 
 function Footer() {
   const { isDarkTheme } = useThemeConfig();
   const context = useDocusaurusContext();
   const { siteConfig = {} } = context;
   const { themeConfig = {} } = siteConfig;
   const { footer } = themeConfig;
 
   const { copyright, links = [], logo = {} } = footer || {};
   const [logoUrl, setLogoUrl] = useState(useBaseUrl(logo.src));
   const { colorMode } = useColorMode();
 
 
 
   if (!footer) {
     return null;
   }
 
   useEffect(() => {
     console.log(isDarkTheme)
     if (colorMode === 'dark')
       setLogoUrl(whiteLogo)
     else
       setLogoUrl(blackLogo)
   }, [colorMode]);
 
   return (
     <Box
       borderTop={2}
       borderColor="#2f80ed"
       borderRadius="1"
       px={{ xs: 3, sm: 4 }}
       py={{ xs: 5, sm: 4 }}
       className={clsx('styles.footerLigth', {
         'styles.footerDark': footer.style === 'dark'
       })}
     >
 
       <Container maxWidth="xl">
 
         <Grid container spacing={2}>
 
 
           <Grid container >
 
             <Grid item xs={12} sm={3}>
               <Box align='center' >
                 <a href={logo.href}>
                   <FooterLogo alt={logo.alt} url={logoUrl} />
                 </a>
                 {copyright ? <div>Copyright &reg; {new Date().getFullYear()} EOS Costa Rica</div> : null}
 
               </Box>
             </Grid>
 
             <Grid item xs={12} sm={6}>
               <Box border={1} borderTop={0} borderBottom={0} borderColor={'#BDBDBD'} paddingLeft={20}>
                 <Grid container >
 
                   <Grid item xs={12} sm={4} >
                     <Box fontSize={18} >
                       <Box fontWeight={800} >EOS Costa Rica</Box>
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
                   <Grid item xs={12} sm={4}>
                     <Box fontSize={18}>
                       <Box fontWeight={800}>Community</Box>
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
                   <Grid item xs={12} sm={4}>
                     <Box fontSize={18}>
                       <Box fontWeight={800}>More</Box>
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
               <div className={styles.contentSocial}>
                 <Grid container spacing={1} >
                   <Grid item xs={12} sm={4} align='right'> 
                     <AiFillGithub size={40} onClick={()=> window.open("https://github.com/eoscostarica/")}/>
                   </Grid>
                   <Grid item xs={12} sm={4} align='center'>
                     <AiFillLinkedin size={40} onClick={()=> window.open("https://www.linkedin.com/company/eoscostarica/")}/>
                   </Grid>
                   <Grid item xs={12} sm={4} align='left'>
                     <AiOutlineTwitter size={40} onClick={()=> window.open("https://twitter.com/eoscostarica")} />
                   </Grid>
                   <Grid item xs={12} sm={4} align='right'>
                     <BsMedium size={40} onClick={()=> window.open("https://eoscostarica.medium.com/")}/>
                   </Grid>
                   <Grid item xs={12} sm={4} align='center'>
                     <AiOutlineInstagram size={40} onClick={()=> window.open("https://www.instagram.com/eoscostarica/")}/>
                   </Grid>
                   <Grid item xs={12} sm={4} align='left'>
                     <AiFillYoutube size={40} onClick={()=> window.open("https://www.youtube.com/c/EOSCostaRica")}/>
                   </Grid>
                 </Grid>
               </div>
             </Grid>
            </Grid>
          </Grid>
        </Container>
     </Box>
   );
 }
 
 export default Footer;