import styled from 'styled-components';
import { mediaScaling } from '../../common/stylesMixing';

export const Item = styled.p`
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
`;
