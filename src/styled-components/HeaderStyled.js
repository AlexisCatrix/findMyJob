import styled from "styled-components";

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
  color: rgba(55, 55, 100);
  text-shadow: 2px 2px 2px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.i`
  height: max-content;
  font-size: 2vw;
  margin-right: 2vh;
  color: rgba(55, 55, 100);
  text-shadow: 2px 2px rgba(55, 55, 100, 0.4);
  &:hover {
    color: rgba(55, 55, 100, 0.75);
  }
`;

export const ButtonSign = styled.button`
  border-radius: 10px;
  height: 5vh;
  width: 5vw;
  margin-left: 1vw;
  &:hover {
    background: rgba(55, 55, 100);
    color: white;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-around;
  border-left: 2px solid rgba(55, 55, 100);
  margin-right: 1vw;
`;
