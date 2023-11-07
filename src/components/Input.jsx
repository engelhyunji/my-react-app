import React, { useState } from 'react'
import styled from 'styled-components'

function Input() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const nameValue = (event) => {
    setName(event.target.value)
  }

  const priceValue = (event) => {
    const newprice = event.target.value.replace(/\D/g, '');
    if (newprice === '') {
      setPrice('');
    } else {
      setPrice(Number(newprice).toLocaleString());
    }
  }

  const ClickButtonHandler = () => {
    if (name.length === 0 && price.length === 0) {
      return alert('이름과 가격 모두 입력해주세요.')
    }

    if (name.length === 0) {
      return alert('이름을 입력해주세요.');
    }

    if (price.length === 0 || isNaN(Number(price.replaceAll(',', '')))) {
      return alert('가격을 숫자로 입력해주세요.');
    }

    alert(`name : ${name}, price : ${String(price).replaceAll(',', '')}`)
  }

  return (
    <>
      <h1>Input</h1>
      <InputBoxWrap>
        <InputBox>
          <p><strong>이름</strong></p>
          <MainInput value={name} onChange={nameValue} />
        </InputBox>
        <InputBox>
          <p><strong>가격</strong></p>
          <MainInput value={price} onChange={priceValue} placeholder='0' />
        </InputBox>
        <PinkButton onClick={ClickButtonHandler}>저장</PinkButton>

      </InputBoxWrap>
    </>
  )
}

const InputBoxWrap = styled.div`
display: flex;
margin-left: 5%;
padding-top: 5px;
gap: 20px;
`
const InputBox = styled.div`
display: flex;
align-items: center;
gap: 15px;
`

const MainInput = styled.input`
  height: 30px;
  border: 3px solid #c29797;
  border-radius: 8px;
`

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
`

export default Input