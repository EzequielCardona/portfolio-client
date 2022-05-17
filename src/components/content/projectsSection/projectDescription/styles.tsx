import styled from 'styled-components';
import { breakPoints, mediaScaling } from '../../../common/stylesMixing';

export const DescriptionWrapper = styled.div`
  max-width: 28rem;
  @media only screen and (max-width: ${breakPoints.monitor}) { 
    max-width: 100%;
    padding-top: 1rem;
  }
  p {
    padding: 1rem 0;
    color: var(--darkBlue);
    font-weight: 400;
    letter-spacing: 0.005em;
    ${mediaScaling('font-size', 0.6, 1)}
    ${mediaScaling('line-height', 1, 1.5)}
  }

  .buttons-wrapper {
    display: flex;
    @media only screen and (max-width: ${breakPoints.ipad}) {
      flex-direction: column-reverse;
    } 
    div {
      max-width: 10.5rem;
      @media only screen and (max-width: ${breakPoints.ipad}) {
       max-width: 100%;
      } 

      :not(:last-of-type) {
        margin-right: 0.4rem;
        @media only screen and (max-width: ${breakPoints.ipad}) {
          margin-right: 0;
          margin-top: 1rem;
        }
      }
    }
  }
`;
