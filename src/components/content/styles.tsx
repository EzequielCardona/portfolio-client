import styled from 'styled-components/macro';
import { breakPoints } from '../common/stylesMixing';

export const ContentWrapper = styled.div`
  padding-top: 90.7px;
  padding-left: 8rem; padding-right: 8rem;
  @media only screen and (max-width: ${breakPoints.desktop}) { padding-left: 4rem; padding-right: 4rem; }
  @media only screen and (max-width: ${breakPoints.tablet}) { padding-left: 2rem; padding-right: 2rem; }
  @media only screen and (max-width: ${breakPoints.ipad}) { padding-left: 1rem; padding-right: 1rem; }
`;
