import React, { useState } from 'react';
import styled from 'styled-components';

const PinkButton = styled.button`
  height: 41px;
  background: #b45f89;
  opacity: 5;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff4d9f;
  }
`;

function Modal() {
  const ButtonWrap = styled.div`
    margin-left: 5%;
    padding-top: 5px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
  `;

  const Dark = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    z-index: 5;
  `;

  const SmallModalWrap = styled.div`
    width: 450px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    background-color: white;
    border-radius: 8px;
  `;

  const SmallBtnWrap = styled.div`
    display: flex;
    gap: 10px;
  `;

  const LargeModalWrap = styled.div`
    width: 250px;
    height: 200px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    background-color: white;
    border-radius: 8px;
  `;

  const LargeModalBtn = styled.button`
    position: absolute;
    right: 10px;
  `;

  const [modal, setModal] = useState(false);
  const [secmodal, setSecModal] = useState(false);

  const SmallToggleModal = () => {
    setModal(!modal);
  };

  const LargeToggleModal = () => {
    setSecModal(!secmodal);
  };

  return (
    <>
      <h1>Modal</h1>
      <ButtonWrap>
        <PinkButton onClick={SmallToggleModal}>open modal</PinkButton>
        <PinkButton onClick={LargeToggleModal}>open modal</PinkButton>
      </ButtonWrap>
      {modal && (
        <>
          <Dark></Dark>
          <SmallModalWrap>
            <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
            <SmallBtnWrap>
              <PinkButton onClick={SmallToggleModal}>닫기</PinkButton>
              <PinkButton>확인</PinkButton>
            </SmallBtnWrap>
          </SmallModalWrap>
        </>
      )}
      {secmodal && (
        <>
          <Dark onClick={LargeToggleModal}></Dark>
          <LargeModalWrap>
            <LargeModalBtn onClick={LargeToggleModal}>X</LargeModalBtn>
            <p>
              닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
            </p>
          </LargeModalWrap>
        </>
      )}
    </>
  );
}

export default Modal;
