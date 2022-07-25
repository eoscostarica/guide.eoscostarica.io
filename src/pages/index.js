import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HeroSection from "./heroSection/index";
import StartResourceSection from "./startResource";
import MediumSection from "./articleSection";

export const HomePage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Layout
        permalink="/"
        title={siteConfig.title}
        description={siteConfig.tagline}
      >
        <HeroSection />
        <StartResourceSection />
        <MediumSection />
      </Layout>
    </>
  );
};

export default HomePage;
