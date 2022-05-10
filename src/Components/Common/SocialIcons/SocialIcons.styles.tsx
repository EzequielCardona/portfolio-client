import styled from "styled-components";
import { mediaScaling } from "../StylesMixing";

export const SocialIconsWrapper = styled.div`
  display: flex;

  svg {
    ${mediaScaling('width', 1, 1.5)};
    aspect-ratio: 1;
    padding: 0.5em;
    border-radius: 4px;
    border: 2px solid var(--darkBlue);
    margin: 0.2em;
    box-sizing: content-box;
    background-color: var(--white);
    cursor: pointer;
  }
`;