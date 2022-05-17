import styled from 'styled-components';
import { mediaScaling } from '../../common/stylesMixing';

export const FormWrapper = styled.div`
  width: 34rem;
  margin: 4rem auto;

  .button-wrapper {
    margin-top: 1rem;
  } 

  p {
    font-weight: 400;
    ${mediaScaling('font-size', 0.6, 1)}
    ${mediaScaling('line-height', 1, 1.5)}
    line-height: 26px;
    color: var(--white);
    text-align: center;
    padding: 1rem 0;
  }
`;
