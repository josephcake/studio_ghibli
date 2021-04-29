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
`;
const CloseModal = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 100px;
  height: 20px;
  background: rgb(0, 0, 0);
  /* background: rgb(230, 230, 230); */
  /* background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.8) 100%
  ); */
  /* border-radius: 5px; */
  border:solid 3px white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  overflow: hidden;
  &:hover {
    color: black;
    background: rgb(60, 60, 60);
    /* background: linear-gradient(
      90deg,
      rgba(80, 80, 80, 0) 0%,
      rgba(80, 80, 80, 0) 10%,
      rgba(80, 80, 80, 0.8) 100%
    ); */
  }
`;

export { Overlay, CloseModal, Inner };
