import styled from "styled-components/macro";
import { mediaScaling, breakPoints } from "../common/stylesMixing";

export const HeaderWrapper = styled.header`
z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 8rem;
  @media only screen and (max-width: ${breakPoints.desktop}) { padding: 1.5rem 4rem }
  @media only screen and (max-width: ${breakPoints.tablet}) { padding: 1.25rem 2rem }
  @media only screen and (max-width: ${breakPoints.ipad}) { padding: 1rem }
  position: fixed;
  top: 0;
  backdrop-filter: blur(5px);

  .logo-wrapper { 
    ${mediaScaling('width', 8.45, 9.12)} 
  }

  .cv-button-wrapper {
    width: 9.56;
  }

  nav {
    display: flex;
    @media only screen and (max-width: ${breakPoints.desktop}) { display: none }
    justify-content: center;

    p {
      color: var(--white);
      ${mediaScaling('font-size', 0.6, 0.875)}
      font-weight: 700;
      line-height: 23px;
      letter-spacing: 1.25px;
      text-decoration: none;
      padding: 0 15px;
      margin: 0 5px;
      cursor: pointer;

      &.selected{
        color: var(--darkBlue);
      }
    }
  }
`;