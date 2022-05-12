import styled from "styled-components";
import { breakPoints, mediaScaling } from "../stylesMixing";

export const SocialIconsWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${breakPoints.monitor}) { margin: 1rem 0 }

  svg {
    ${mediaScaling('width', 1, 1.5)};
    aspect-ratio: 1;
    padding: 0.5em;
    border-radius: 4px;
    border: 2px solid var(--darkBlue);
    box-sizing: content-box;
    background-color: var(--white);
    cursor: pointer;
    margin: 0.5em 0;

    :not(:last-child) {
      margin-right: 0.5em;
    }
  }
`;