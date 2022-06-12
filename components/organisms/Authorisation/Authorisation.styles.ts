import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16rem;

  @media (min-width: 760px) {
    margin-top: 9rem;
    padding-top: 0;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50%;
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  position: relative;

  @media (min-width: 760px) {
    background-color: #ffffff;
    box-shadow: 0px 2px 40px 5px rgb(233 233 235 / 70%);
    width: 24rem;
  }

  @media (min-width: 1024px) {
    width: 24rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  overflow: hidden;
  opacity: 60%;

  @media (min-width: 760px) {
    display: none;
  }
`;

export const Icon = styled.p`
  display: none;
  @media (min-width: 760px) {
    display: block;
    font-size: 3.7rem;
    margin: 0;
    padding-bottom: 1rem;
  }
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
