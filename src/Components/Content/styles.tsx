import styled from "styled-components/macro";
import { breakPoints, mediaScaling } from "../common/stylesMixing";

export const ContentWrapper = styled.div`

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
    padding: 2rem 0 0 0;

    .description-wrapper {
      max-width: 31.25rem;
      @media only screen and (max-width: ${breakPoints.monitor}) { padding: 1rem 0; max-width: unset }

      .mobile-cv-button {
        display: none;
        @media only screen and (max-width: ${breakPoints.tablet}) { display: block; }
      }
    }

    .image-wrapper {
      width: 31.25rem;
      @media only screen and (max-width: ${breakPoints.tablet}) { width: 100%; }
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
      @media only screen and (max-width: ${breakPoints.monitor}) { max-width: unset }
      margin-bottom: 1rem;
    }
  }

  .second-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12.5rem 0;
    @media only screen and (max-width: ${breakPoints.monitor}) { padding: 6rem 0 }
    @media only screen and (max-width: ${breakPoints.desktop}) { padding: 2.5rem 0 }
    color:var(--darkBlue);

    h5 {
      font-weight: 300;
      ${mediaScaling('font-size', 1.06, 2.125)}
      ${mediaScaling('line-height', 2.2, 3.44)}
      max-width: 50rem;
    }

    p {
      font-weight: 700;
      ${mediaScaling('font-size', 0.8, 1.5)}
      ${mediaScaling('line-height', 2.2, 2.44)}
      padding: 1rem 0;
    }
    
    svg {
      ${mediaScaling('width', 2.5, 5)}
      ${mediaScaling('height', 2.5, 5)}
    }
  }
`;