import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PinkBackground = styled.div`
  background-color: pink;
  z-index: 0;
  width: 100%;
  height: 45rem;
  position: absolute;
  bottom: -40rem;
  border-radius: 20px 20px 0 0;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  margin-bottom: 3rem;
`;

export const SignInButton = styled.button`
  z-index: 10;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  width: 90%;
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

  &:hover {
    box-shadow: rgba((208,112,160, 0.5) 0px 7px 29px 0px;
  }

  & > p {
    margin-left: 2rem;
  }
`;

export const SignOutButton = styled.button`
  width: 120px;
  border-radius: 0.5px;
  height: 36px;
  text-decoration: none;
  border: none;
  background-color: #4285f4;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(66, 133, 244, 0.2) 0px 7px 29px 0px;
  }
`;
