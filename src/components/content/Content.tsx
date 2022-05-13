import React from 'react';
import { ContentWrapper } from '.';
import { FormSection } from './formSection';
import { FullTextSection } from './fullTextSection';
import { HeroSection } from './heroSection';

function Content():React.ReactElement {
  return (
    <ContentWrapper>
      <HeroSection />
      <FullTextSection />
      <FormSection />
    </ContentWrapper>
  );
}

export default Content;
