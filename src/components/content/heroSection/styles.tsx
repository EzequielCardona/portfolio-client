import styled from 'styled-components';
import { breakPoints, mediaScaling } from '../../common/stylesMixing';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${breakPoints.monitor}) { flex-direction: column-reverse; }    
  color: var(--darkBlue);
  padding: 2rem 0 0 0;

  .description-wrapper {
    max-width: 31.25rem;
    @media only screen and (max-width: ${breakPoints.monitor}) { padding: 1rem 0; max-width: unset }

    .mobile-button {
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
`;
