import React from 'react';
import styled from 'styled-components'
import { Overlay } from './Modal.styled'

const CloseModal = styled.div`
cursor: pointer;
  position:fixed;
  top:10px;
  right: 10px;
  width:20px;
  height:20px;
  background-color:rgba(0,0,0,0.4);
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  padding:10px;
`


const Modal = ({child, setCurrentFilm}) =>{
  console.log(child)
  
  const handleClose = () =>{
    setCurrentFilm(null)
  }
  return(
    <Overlay>
      <CloseModal onClick={handleClose}>X</CloseModal>
      {child}
    </Overlay>
  )
}

export default Modal