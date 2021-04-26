import styled from "styled-components";

const Overlay = styled.div`
  z-index: 999999;
  position: fixed;
  /* overflow:hidden; */
  height:100vh;
  width:100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.6); */
  background-color: white;
  display:none;
`;

export { Overlay };
