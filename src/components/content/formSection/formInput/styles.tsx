import styled from 'styled-components';
import { mediaScaling } from '../../../common/stylesMixing';

export const InputWrapper = styled.div`

  display: flex;
  flex-direction: column;

  label {
    font-weight: 700;
    ${mediaScaling('font-size', 0.6, 1)}
    ${mediaScaling('line-height', 1, 1.5)}
    color: var(--darkBlue);
    padding: 0.5rem 1rem;

  }

  span {
    color: var(--red);
  }

  input, textarea {
    border: 1px solid #858C94;
    border-radius: 8px;
    padding: 0.5rem 1rem;
  }
`;
