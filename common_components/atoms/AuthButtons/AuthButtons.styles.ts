import styled from "styled-components";

export const AuthButton = styled.button`
  z-index: 10;
  display: flex;
  align-items: center;
  width: 80%;
  border-radius: 5px;
  height: 2.5rem;
  text-decoration: none;
  border: none;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgb(208,112,160, 25%);
  border: 1px solid rgb(208,112,160, 15%);
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  padding: 1.5rem;
  font-weight: medium;
  &:hover {
    box-shadow: rgba((208,112,160, 0.5) 0px 7px 29px 0px;
  }

  & > p {
    margin-left: 2rem;
  }
`;
