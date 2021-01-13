import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 7.5vh;
`;

export const Logo = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500&display=swap");
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 2em;
  padding: 1vw;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: max-content;
`;

export const Icon = styled.i`
  height: max-content;
  font-size: 2vw;
  margin: 1.5vh;
  color: black;
`;

export const ButtonSign = styled.button`
  background: transparent;
  border-radius: 10px;
  height: 5vh;
  width: 5vw;
  margin: 1vw;
`;

export const FirstHalfPage = styled.div`
  height: 46.25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SearchSection = styled.div`
  position: absolute;
`;

export const SearchBar = styled.input`
  height: 7, 5vh;
`;

export const SecondHalfPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46.25vh;
  background: grey;
`;

export const FirstReminder = styled.div`
  background: white;
  width: 30vw;
  height: 35vh;
  margin: 2vh;
`;

export const SecondReminder = styled.div`
  background: white;
  width: 30vw;
  height: 35vh;
  margin: 2vh;
`;

export const ThirdReminder = styled.div`
  background: white;
  width: 30vw;
  height: 35vh;
  margin: 2vh;
`;

export const SearchButton = styled.button`
  height: 35px;
  width: 80px;
`;

export const BackgroundImageFirstHalfPage = styled.img`
  width: 100vw;
`;
