import styled from 'styled-components';
import { breakPoints } from '../../common/stylesMixing';

export const Nav = styled.nav`
  display: flex;
  @media only screen and (max-width: ${breakPoints.desktop}) { display: none }
  justify-content: center;
`;
