/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react'
import clsx from 'clsx';

//import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Box, Grid, Container, Link,Image } from '@material-ui/core';

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
  <img className="footer__logo" alt={alt} src={url} loading="lazy" />
);

function Footer() {
  const { isDarkTheme } = useThemeConfig();
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { themeConfig = {} } = siteConfig;
  const { footer } = themeConfig;

  const { copyright, links = [], logo = {} } = footer || {};
  const [logoUrl, setLogoUrl] = useState(useBaseUrl(logo.src));

  if (!footer) {
    return null;
  }

  useEffect(() => {
    if (isDarkTheme)
      setLogoUrl('https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png')
    else
      setLogoUrl(logo.src)
  }, [isDarkTheme]);

  return (
    <Box 
      px={{ xs: 3, sm: 10 }} 
      py={{ xs: 5, sm: 10 }} 
      bgcolor="#f2f2f2" 
      color="#333"
      >

      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>EOS Costa Rica</Box>
            <Box>
              <Link href="/" color="inherit">
                Engineering Culture
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Open Source Projects
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Open Source Guidelines
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Community</Box>
            <Box>
              <Link href="/" color="inherit">
                Meetup
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Telegram Channels
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                GitHub
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>More</Box>
            <Box>
              <Link href="/" color="inherit">
                Linkedin
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Medium
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Twitter
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>SOCIAL MEDIA</Box>
            <Box>
              <Link href="/" color="inherit">
                Linkedin
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Medium
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                Twitter
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:10}}>

          Copyright &reg; {new Date().getFullYear()} EOS Costa Rica
        </Box>

      </Container>
    </Box>
  );
}

export default Footer;
