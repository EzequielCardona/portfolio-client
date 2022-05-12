import styled from "styled-components/macro";
import { mediaScaling, breakPoints } from "../Common/StylesMixing";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem 2rem 8rem;
  @media only screen and (max-width: ${breakPoints.monitor}) { 
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 2rem
  }
  @media only screen and (max-width: ${breakPoints.desktop}) { padding: 1.5rem 4rem }
  @media only screen and (max-width: ${breakPoints.tablet}) { padding: 1.25rem 2rem }
  @media only screen and (max-width: ${breakPoints.ipad}) { padding: 1rem }

  .Logo-wrapper {
    width: 193.6px;
    @media only screen and (max-width: ${breakPoints.monitor}) { display: none }
  }

  .copyright {
    display: flex;
    align-items: center;
    @media only screen and (max-width: ${breakPoints.tablet}) { flex-direction: column; }
    p { 
      margin-right: 0.2rem;
      text-align: center;
    }
  }

  p {
    color: var(--white);
    ${mediaScaling('font-size', 0.6, 1)}
    font-weight: 400;
    line-height: 26px;
    display: flex;

    svg {
      margin: 0 0.2em;
      width: 1.5rem;
      aspect-ratio: 1;
    }
  }
`;