import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Wrapper = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  height: 20rem;
  position: absolute;
  z-index: 10;
  top: 45%;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
