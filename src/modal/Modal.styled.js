import styled from "styled-components";

const Overlay = styled.div`
  z-index: 999999;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(30, 30, 30, 1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  /* height:100%; */
  background-color: white;
  height: 80%;
  width: 90%;
  border-radius: 20px;
  @media (max-width: 1000px) {
    height: 90%;
    width: 100%;
    border-radius: 0;
  }
`;
const CloseModal = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 100px;
  height: 20px;
  background: rgb(0, 0, 0);  
  border:solid 3px white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  overflow: hidden;
  &:hover {
    background: rgb(60, 60, 60);    
  }
`;

export { Overlay, CloseModal, Inner };
