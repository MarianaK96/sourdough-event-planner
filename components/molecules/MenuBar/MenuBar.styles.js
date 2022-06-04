import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 11;
  background-color: #fff;
`;

export const Icon = styled.button`
  cursor: pointer;
  position: relative;
  border: none;
  background-color: transparent;
`;
