import styled from "styled-components/macro";

export const breakPoints = {
  ipad: '470px',
  tablet: '700px',
  desktop: '1023px',
  monitor: '1270px'
}

export const mediaScaling = (property:string, variant:number, max:number):string => {
  return (
    `
      ${property}: min(calc(${variant}rem + 1vw), ${max}rem);
    `
  )
};

export const Button = styled.button`
  padding: 0.8em 1.3em;
  color: var(--white);
  ${mediaScaling('font-size', 0.6, 0.875)}
  font-weight: 700;
  letter-spacing: 1.25px;
  border: none;
  border-radius: 4px;
  background-color: var(--darkBlue);
  cursor: pointer;
`;

export const Logo = styled.h1<{ isWhite?:boolean }>`
  color: var(--darkBlue);
  ${({isWhite}): string | false | undefined => isWhite &&`
    color: var(--white);
  `}
  font-weight: 900;
  ${mediaScaling('font-size', 1.2, 1.5)}
  line-height: 39px;
  letter-spacing: -0.5px;
`;