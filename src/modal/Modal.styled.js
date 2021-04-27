import styled from "styled-components";

const Overlay = styled.div`
  z-index: 999999;
  position: fixed;
  width:100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(130, 130, 130, 1); */
  background-color: gray;
`;

const Inner = styled.div`
  height:100%;
  width:100vw;
`
const CloseModal = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 100px;
  height: 20px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.8) 100%
  );
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  &:hover {
    background: rgb(50, 50, 50);
    background: linear-gradient(
      90deg,
      rgba(80, 80, 80, 0) 0%,
      rgba(80, 80, 80, 0) 10%,
      rgba(80, 80, 80, 0.8) 100%
    );
    color: black;
  }
`;

export { Overlay, CloseModal, Inner };
