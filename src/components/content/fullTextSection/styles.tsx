import styled from 'styled-components';
import { mediaScaling, breakPoints } from '../../common/stylesMixing';

export const FullTextSectionWrapper = styled.div`
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
`;
