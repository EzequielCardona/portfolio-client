import React from "react";
import { ContentWrapper } from ".";
import FullTextSection from "./in/fullTextSection";
import HeroSection from "./in/heroSection";

const Content = ():JSX.Element => {
  return (
    <ContentWrapper>
      <HeroSection />
      <FullTextSection />
    </ContentWrapper>
  )
}

export default Content;