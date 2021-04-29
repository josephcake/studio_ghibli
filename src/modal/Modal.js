import React from 'react';
import styled from 'styled-components'
import arrow from "../assets/icons/arrow.svg";

import { Overlay, CloseModal, Inner } from "./Modal.styled";

const SVGImg = styled.img`
  display: block;
  padding: 0 30px;  
`;

const Modal = ({child, handleModal}) =>{

  const handleClose = () =>{
    handleModal(null)
  }
  return (
    <Overlay>
      <Inner>{child}</Inner>
      <CloseModal onClick={handleClose}>
        <SVGImg  height={"40px"} width={"100px"} src={arrow} />
      </CloseModal>
    </Overlay>
  );
}

export default Modal