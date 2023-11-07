import React from 'react';
import styled from 'styled-components';

function Button({ size, color, icon, onClick, children }) {
  const Button = styled.div`
    ${() => colorHandler(color)};
    ${() => sizeHandler(size)};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    cursor: pointer;
    &:active {
      filter: brightness(70%);
    }
  `;
  
  const colorHandler = (color) => {
    switch (color) {
      case 'primary':
        return `border: 3px solid #55EFC4; background-color: #55EFC4`;
      case 'negative':
        return `border: 3px solid #FAB1A0; color: #D63031; background-color: #FAB1A0`;
      default:
        return ''; // Add a default case to handle any other values
    }
  };

  const sizeHandler = (size) => {
    switch (size) {
      case 'large':
        return `width: 185px; height: 45px; background-color: white; font-weight: bold;`;
      case 'medium':
        return `width: 120px; height: 40px;`;
      case 'small':
        return `width: 90px; height: 35px;`;
      default:
        return ''; // Add a default case to handle any other values
    }
  };


  return (
    <>
      <Button
        onClick={onClick}
      >
        { children }&nbsp;{ icon }
      </Button>
    </>
  )
}

export default Button