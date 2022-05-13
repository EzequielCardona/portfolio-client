import React from "react";
import { ContentWrapper } from ".";
import FormSection from "./in/formSection";
import FullTextSection from "./in/fullTextSection";
import HeroSection from "./in/heroSection";

const Content = ():JSX.Element => {
  return (
    <ContentWrapper>
      <HeroSection />
      <FullTextSection />
      <FormSection />
    </ContentWrapper>
  )
}

export default Content;