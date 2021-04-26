import React from 'react';
import { Overlay } from './Modal.styled'

const Modal = ({child}) =>{
  console.log(child)
  return(
    <Overlay>
      {child}
    </Overlay>
  )
}

export default Modal