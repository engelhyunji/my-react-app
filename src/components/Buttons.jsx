import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSun } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';

function Buttons() {
  const size = ['large', 'medium', 'small'];
  const color = ['primary', 'negative'];

  const prBtnClickHandler = () => alert(`버튼을 만들어보세요!`);
  const ngBtnClickHandler = () => prompt(`어렵나요🤓?`);

  return (
    <>
      <h1>Button</h1>
      {/* primary */}
      <ButtonsSection>
        <Button 
          size={size[0]}
          color={color[0]}
          icon={<FontAwesomeIcon icon={faChevronRight}/>}
          onClick={prBtnClickHandler}
        >
          Large Primary Button
        </Button>
        <Button
          size={size[1]}
          color={color[0]}
        >
          Medium
        </Button>
        <Button
          size={size[2]}
          color={color[0]}
        >
          Small
        </Button>
      </ButtonsSection>

      {/* negative */}
      <ButtonsSection>
        <Button
          size={size[0]}
          color={color[1]}
          icon={<FontAwesomeIcon icon={faSun} />}
          onClick={ngBtnClickHandler}
        >
          Large Negative Button
        </Button>
        <Button
          size={size[1]}
          color={color[1]}
        >
          Medium
        </Button>
        <Button
          size={size[2]}
          color={color[1]}
        >
          Small
        </Button>
      </ButtonsSection>
    </>
  )
}

const ButtonsSection = styled.section`
  margin-left: 5%;
  padding-top: 5px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;



export default Buttons