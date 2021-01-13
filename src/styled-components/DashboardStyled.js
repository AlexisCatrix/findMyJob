import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: auto;
`;

export const Header = styled.div`
  height: 7.5vh;
`;

export const FirstHalfPage = styled.div`
  height: 46.25vh;
  background: blue;
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
  height: 46.25vh;
  background: grey;
`;

export const SearchButton = styled.button`
  height: 35px;
  width: 80px;
`;

export const BackgroundImageFirstHalfPage = styled.img`
  /* height: 50vh; */
  width: 100vw;
`;
