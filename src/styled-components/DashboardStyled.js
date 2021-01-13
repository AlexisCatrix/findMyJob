import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: auto;
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
  background: orange;
  height: 35px;
  color: white;
  text-shadow: 2px 2px grey;
  &:hover {
    background: rgba(255, 178, 37);
  }
`;

export const BackgroundImageFirstHalfPage = styled.img`
  width: 100vw;
`;
