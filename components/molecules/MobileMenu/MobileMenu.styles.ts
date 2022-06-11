import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Wrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 10;
  height: ${(props) => (props.isOpen ? "50%" : "0%")};
  bottom: 0;
  width: 100%;
  transition: height 0.4s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 80%;
  align-content: space-evenly;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
    justify-content: baseline;
  }
`;
