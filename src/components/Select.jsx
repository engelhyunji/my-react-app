import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Select() {
  const languageList = ['react', 'java', 'spring', 'reactnative'];
  const languageList1 = ['react!', 'java!', 'spring!', 'reactnative!'];
  const [language, setLanguage] = useState('react');
  const [language1, setLanguage1] = useState('react!');
  const [activeSelect, setActiveSelect] = useState(null);

  const toggleShowList = useCallback(() => {
    setActiveSelect(activeSelect === 'list1' ? null : 'list1');
  }, [activeSelect]);

  const toggleShowList1 = useCallback(() => {
    setActiveSelect(activeSelect === 'list2' ? null : 'list2');
  }, [activeSelect]);

  const liClickHandler = (index) => {
    setLanguage(languageList[index]);
    setActiveSelect(null);
  };

  const liClickHandler1 = (index) => {
    setLanguage1(languageList1[index]);
    setActiveSelect(null);
  };

  const selectWrapRef = useRef();

  useEffect(() => {
    const clickListOutside = (e) => {
      if (selectWrapRef.current && !selectWrapRef.current.contains(e.target)) {
        setActiveSelect(null);
      }
    };
    document.addEventListener('mousedown', clickListOutside);
    return () => {
      document.removeEventListener('mousedown', clickListOutside);
    };
  }, []);

  return (
    <Wrap>
      <h1>Select</h1>
      <ButtonContainer>
        <SelectButton onClick={toggleShowList} ref={selectWrapRef} active={activeSelect === 'list1'}>
          {language}
          <FontAwesomeIcon icon={faCaretDown} />
        </SelectButton>

        <SelectButton1 onClick={toggleShowList1} ref={selectWrapRef}>
          {language1}
          <FontAwesomeIcon icon={faCaretDown} />
        </SelectButton1>
      </ButtonContainer>

      {(activeSelect === 'list1' || activeSelect === 'list2') && (
        <div>
          <LanguageUl showList1={activeSelect === 'list2'}>
            {activeSelect === 'list1' &&
              languageList.map((item, index) => (
                <LanguageLi key={index} onClick={() => liClickHandler(index)}>
                  {item}
                </LanguageLi>
              ))}
            {activeSelect === 'list2' &&
              languageList1.map((item, index) => (
                <LanguageLi key={index} onClick={() => liClickHandler1(index)}>
                  {item}
                </LanguageLi>
              ))}
          </LanguageUl>
        </div>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  height: 250px;
  width: 800px;
  margin-left: 5%;
  padding-top: 5px;
  border: 5px solid #e0c8d4;
  border-radius: 15px;
  margin-top: 30px;
  margin-bottom: 200px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const SelectButton = styled.button`
  width: calc(50% - 5px);
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  height: 30px;
  text-overflow: ellipsis;
  margin: auto;
`;

const SelectButton1 = styled.button`
  width: calc(50% - 5px);
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  height: 30px;
`;

const LanguageUl = styled.ul`
  width: 100%;
  overflow-y: ${(props) => (props.showList1 ? 'auto' : 'visible')};
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: ${(props) => (props.showList1 ? '150px' : '0')};
  transition: max-height 0.3s ease-in-out;
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

export default Select;
