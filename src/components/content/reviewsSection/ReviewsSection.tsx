import React from 'react';
import { ReviewsSectionWrapper } from '.';

interface reviewsSectionProps {
  image: string,
  review: string,
  reviewerInfo: string,
}

function ReviewsSection({
  image,
  review,
  reviewerInfo,
}:reviewsSectionProps):React.ReactElement {
  return (
    <ReviewsSectionWrapper>
      <img src={image} alt={reviewerInfo} />
      <h4>{review}</h4>
      <p>{reviewerInfo}</p>
    </ReviewsSectionWrapper>
  );
}

export default ReviewsSection;
