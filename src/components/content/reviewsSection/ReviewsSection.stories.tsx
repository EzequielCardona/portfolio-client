import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import ReviewsSection from './ReviewsSection';

export default {
  title: 'Layout/ReviewsSection',
  component: ReviewsSection,
} as ComponentMeta<typeof ReviewsSection>;

export const Template:
  ComponentStory<typeof ReviewsSection> = function Template(args):React.ReactElement {
    const { image, review, reviewerInfo } = args;
    return (
      <ReviewsSection
        image={image}
        review={review}
        reviewerInfo={reviewerInfo}
      />
    );
  };

export const Primary = Template.bind({});
Primary.args = {
  image: 'https://someImage.com',
  review: "'Jaume ha superado mis expectativas desde el diseño hasta el desarrollo'.",
  reviewerInfo: 'JASON LOPEZ / COFUNDADOR Y CEO MARVOL',
};
