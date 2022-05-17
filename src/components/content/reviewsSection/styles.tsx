import styled from 'styled-components';
import { breakPoints, mediaScaling } from '../../common/stylesMixing';

export const ReviewsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  @media only screen and (max-width: ${breakPoints.tablet}) {
    padding: 1rem;
  }
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 24px;
  border: 4px solid;
  border-image-source: radial-gradient(83.14% 78.52% at -12.32% -18.69%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 100%);
  
  h4 {
    font-weight: 400;
    ${mediaScaling('font-size', 0.8, 2.2)}
    ${mediaScaling('line-height', 2, 3.43)}
    color: var(--darkBlue);
    text-align: center;
    width: 80%;
    padding: 1rem 0;
    @media only screen and (max-width: ${breakPoints.tablet}) {
      text-align: left;
      width: 100%;
    }
  }

  p {
    font-weight: 700;
    ${mediaScaling('font-size', 0.6, 1.5)}
    ${mediaScaling('line-height', 1, 2.43)}
    color: var(--darkBlue);
    opacity: 0.5;
    text-align: center;
  }
`;
