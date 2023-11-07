import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Select() {
  const languageList = ['리액트', '자바', '스프링', '리액트네이티브'];
  const [language, setLanguage] = useState('리액트');
  const [showList, setShowList] = useState(false);

  const toggleShowList = useCallback(() => setShowList(!showList), [showList]);

  const liClickHandler = (index) => {
    setLanguage(languageList[index]);
    toggleShowList();
  };

  const selectWrapRef = useRef();
  useEffect(() => {
    const clickListOutside = (e) => {
      if (selectWrapRef.current && !selectWrapRef.current.contains(e.target)) {
        toggleShowList();
      }
    };
    document.addEventListener('mousedown', clickListOutside);
    return () => {
      document.removeEventListener('mousedown', clickListOutside);
    };
  }, [toggleShowList]);

  

  return (
    <>
      <Wrap>
      <h1>Select</h1>
        <SelectButton
          onClick={toggleShowList}
        >
          {language}
          <FontAwesomeIcon icon={faCaretDown} />
        </SelectButton>
        {
          showList &&
          <div
            ref={selectWrapRef}
          >
            <LanguageUl>
            {
              languageList.map((item, index) => {
                return (
                  <LanguageLi
                    key={index}
                    onClick={() => liClickHandler(index)}
                  >
                    { item }
                  </LanguageLi>
                )
              })
            }
            </LanguageUl>
          </div>
        }
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
    margin: 30px auto; 
    width: 300px; 
    margin-left: 5%;
    padding-top: 5px;
    position: relative; // 부모 요소의 위치를 상대적으로 설정
    border: 5px solid #e0c8d4;
    border-radius: 15px;
    margin-top: 30px;
    overflow: visible; // overflow를 visible로 설정
    margin-bottom: 200px;
`;

const SelectButton = styled.button`
  width: 100%; 
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  cursor: pointer;
`;

const LanguageUl = styled.ul`
  width: 100%; 
  height: 200px; 
  overflow-y: auto; 
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LanguageLi = styled.li`
  width: 100%; 
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-left: 2px solid #e0c8d4;
  border-right: 2px solid #e0c8d4;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #e0c8d4;
    border-radius: 5px;
  }
  &:first-child {
    border-top: 1px solid #e0c8d4;
    border-radius: 5px;
  }
  &:last-child {
    border-bottom: 1px solid #e0c8d4;
    border-radius: 5px;
  }
`;



export default Select