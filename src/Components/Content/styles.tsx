import styled from "styled-components/macro";
import { breakPoints, mediaScaling } from "../Common/StylesMixing";

export const ContentWrapper = styled.div`
  min-height: 100vh;
  margin-bottom: -72.5px;
  @media only screen and (max-width: ${breakPoints.monitor}) { margin-bottom: 0; }
  padding-top: 90.7px;
  padding-left: 8rem; padding-right: 8rem;
  @media only screen and (max-width: ${breakPoints.desktop}) { padding-left: 4rem; padding-right: 4rem; }
  @media only screen and (max-width: ${breakPoints.tablet}) { padding-left: 2rem; padding-right: 2rem; }
  @media only screen and (max-width: ${breakPoints.ipad}) { padding-left: 1rem; padding-right: 1rem; }

  .first-section {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: ${breakPoints.monitor}) { flex-direction: column-reverse; }    
    color: var(--darkBlue);
    padding: 2rem 0;

    .description-wrapper {
      max-width: 31.25rem;
      @media only screen and (max-width: ${breakPoints.monitor}) { padding: 1rem 0 }
    }

    .image-wrapper {
      width: 31.25rem;
      @media only screen and (max-width: ${breakPoints.monitor}) { width: 100%; }
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 24px;
      overflow: hidden;
      background-color: var(--purple);
      position: relative;

      img { z-index: 2; width: 70% }

      ::before, ::after {
        content: '';
        position: absolute;
        width: 31.25rem;
        @media only screen and (max-width: ${breakPoints.monitor}) { width: 100%; }
        height: 5.5rem;
        @media only screen and (max-width: ${breakPoints.tablet}) { height:3rem }
        background-color: var(--white);
        bottom: 0;
        z-index: 1;
      }
    }
      
    h4 {
      font-weight: 700;
      ${mediaScaling('font-size', 1, 1.5)}
      ${mediaScaling('line-height', 1.6, 2.43)}
    }

    h3 {
      font-weight: 700;
      ${mediaScaling('font-size', 2, 3.68)}
      ${mediaScaling('line-height', 4, 5.93)} 
    }

    p {
      font-weight: 400;
      ${mediaScaling('font-size', 0.6, 1)}
      ${mediaScaling('line-height', 1.1, 1.6)}
      max-width: 28rem;
    }
  }
`;