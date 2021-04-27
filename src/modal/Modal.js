import React from 'react';
import styled from 'styled-components'
import { Overlay, CloseModal, Inner } from "./Modal.styled";

const Modal = ({child, setCurrentFilm}) =>{

  const handleClose = () =>{
    setCurrentFilm(null)
  }
  return(
    <Overlay>
      <Inner>
        {child}
      </Inner>
      <CloseModal onClick={handleClose}>{"<-------"}</CloseModal>
    </Overlay>
  )
}

export default Modal