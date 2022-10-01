import styled from '@emotion/styled';

type Props = {
  isPrevShown?: boolean;
  isNextShown?: boolean;
  shevronSide: 'left' | 'right';
}

export const Shevron = styled.div<Props>`
  position: absolute;
  font-size: 3em;
  color: #C4C6CA;
  cursor: pointer;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  transition: all .5s ease;

  opacity: ${props => 
    props.shevronSide === 'left' 
      ? props.isPrevShown ? '1' : '0' 
      : props.isNextShown ? '1' : '0'};
  
  ${props => 
    props.shevronSide === 'left' 
      ? 'left: 0;' 
      : `
          right: 0; 
          justify-content: flex-end;
        `}

  &:hover{
    font-size: 4em;
    color: #B0B0B0;
  }
`;

export const Slide = styled.div`
  margin: 0 2em;
  width: 100%;
  height: 100vh;
`;

export const Slider = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
