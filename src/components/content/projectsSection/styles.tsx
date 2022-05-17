import styled from 'styled-components';
import { breakPoints } from '../../common/stylesMixing';

export const ProjectsSectionWrapper = styled.div<{ isReversed:boolean }>`
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${breakPoints.monitor}) { 
    flex-direction: column-reverse;
  }
  ${({
    isReversed,
  }): string | false => isReversed && `
    flex-direction: row-reverse;
  `}
  padding: 5rem 0;

  .image-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      max-width: 80%;
      @media only screen and (max-width: ${breakPoints.tablet}) { 
        width: 100%;
      }
      max-height: 33.5rem;
    }
  }
`;
