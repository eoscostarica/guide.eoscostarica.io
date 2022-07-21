import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { StartResourceSection } from "./startResource/index";
import { HeroSection } from "./heroSection/index";
import { MediumSection } from "./CustomArticle";

export const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      permalink="/"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HeroSection />
      <StartResourceSection />
      <MediumSection />
    </Layout>
  );
};

export default HomePage;
