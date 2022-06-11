import styled from "styled-components";
interface Props {
  isOpen: boolean;
}

export const Button = styled.button<Props>`
  width: ${(props) => (props.isOpen ? "10rem" : "0rem")};
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  height: 2.5rem;
  border-radius: 5px;
  background-color: #d070a0;
  margin-bottom: 1rem;
  border: none;
  color: #ffffff;
  font-weight: bold;
  align-items: center;

  @media (min-width: 1024px) {
    margin-right: 1rem;
  }
`;
