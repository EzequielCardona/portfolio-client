import styled from 'styled-components/macro';

export const breakPoints = {
  ipad: '470px',
  tablet: '700px',
  desktop: '1023px',
  monitor: '1270px',
};

export function mediaScaling(property:string, variant:number, max:number):string {
  return (
    `
      ${property}: min(calc(${variant}rem + 1vw), ${max}rem);
    `
  );
}

export const Button = styled.button<{ isTransparent?:boolean }>`
  width: 100%;
  padding: 0.8em 1.3em;
  color: var(--white);
  ${mediaScaling('font-size', 0.6, 0.875)}
  font-weight: 700;
  letter-spacing: 1.25px;
  border: none;
  border-radius: 4px;
  background-color: var(--darkBlue);
  border: 2px solid var(--darkBlue);
  cursor: pointer;
  ${({
    isTransparent,
  }): string | false | undefined => isTransparent && `
    background-color: transparent;
    color: var(--darkBlue);
  `}
`;

export const Logo = styled.h1<{ isWhite?:boolean }>`
  color: var(--darkBlue);
  ${({
    isWhite,
  }): string | false | undefined => isWhite && `
    color: var(--white);
  `}
  font-weight: 900;
  ${mediaScaling('font-size', 1.2, 1.5)}
  line-height: 39px;
  letter-spacing: -0.5px;
`;

export const HighlightedTitle = styled.div<{ isInContactForm?: boolean }>`

  background-color: var(--darkBlue);
  position: relative;
  width: fit-content;
  ${({
    isInContactForm,
  }): string | false | undefined => isInContactForm && `
    width: 100%
  `};

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(-0.3rem, 0.3rem);
    background-color: white;
    left: 0;
    z-index: -1;
  }

  h2 {
    ${({
    isInContactForm,
  }): string | false | undefined => isInContactForm && `
      text-align: center;
    `};
    padding: 0.2rem 1rem;;
    color: var(--white);
    font-weight: 700;
    ${mediaScaling('font-size', 1, 2.1)}
    ${mediaScaling('line-height', 2.3, 3.43)}
  }
`;
