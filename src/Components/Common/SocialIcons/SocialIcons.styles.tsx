import styled from "styled-components";
import { breakPoints, mediaScaling } from "../StylesMixing";

export const SocialIconsWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${breakPoints.tablet}) { margin-bottom:0.2rem }

  svg {
    ${mediaScaling('width', 1, 1.5)};
    aspect-ratio: 1;
    padding: 0.5em;
    border-radius: 4px;
    border: 2px solid var(--darkBlue);
    margin: 0.5rem;
    box-sizing: content-box;
    background-color: var(--white);
    cursor: pointer;
  }
`;