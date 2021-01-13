import React from "react";
import {
  Main,
  FirstHalfPage,
  SecondHalfPage,
  Header,
  SearchSection,
  SearchBar,
  SearchButton,
  BackgroundImageFirstHalfPage,
} from "../styled-components/DashboardStyled";

export default function Dashboard() {
  return (
    <>
      <Main>
        <Header>Here is the Dashboard</Header>
        <FirstHalfPage>
          <BackgroundImageFirstHalfPage
            src="https://blog.talkspirit.com/wp-content/uploads/2020/05/digital-workplace-1680x840-1.jpg"
            alt="firstHalfPage"
          />
          <SearchSection>
            <SearchBar id="firstSearchBar"></SearchBar>
            <SearchBar id="secondSearchBar"></SearchBar>
            <SearchButton>Find</SearchButton>
          </SearchSection>
        </FirstHalfPage>
        <SecondHalfPage></SecondHalfPage>
      </Main>
    </>
  );
}
