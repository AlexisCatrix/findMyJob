import React from "react";
import Header from "./Header";
import {
  Main,
  FirstHalfPage,
  SecondHalfPage,
  SearchSection,
  SearchBar,
  SearchButton,
  BackgroundImageFirstHalfPage,
  FirstReminder,
  SecondReminder,
  ThirdReminder,
} from "../styled-components/DashboardStyled";

export default function Dashboard() {
  return (
    <>
      <Main>
        <Header />
        <FirstHalfPage>
          <BackgroundImageFirstHalfPage
            src="https://blog.talkspirit.com/wp-content/uploads/2020/05/digital-workplace-1680x840-1.jpg"
            alt="firstHalfPage"
          />
          <SearchSection>
            <SearchBar id="firstSearchBar" placeholder="Métier"></SearchBar>
            <SearchBar
              id="secondSearchBar"
              placeholder="Localisation"
            ></SearchBar>
            <SearchButton>Find my job !</SearchButton>
          </SearchSection>
        </FirstHalfPage>

        <SecondHalfPage>
          <FirstReminder></FirstReminder>
          <SecondReminder></SecondReminder>
          <ThirdReminder></ThirdReminder>
        </SecondHalfPage>
      </Main>
    </>
  );
}
