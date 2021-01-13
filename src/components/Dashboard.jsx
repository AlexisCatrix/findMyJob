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
  FirstReminder,
  SecondReminder,
  ThirdReminder,
  Logo,
  IconContainer,
  Icon,
  ButtonSign,
} from "../styled-components/DashboardStyled";

export default function Dashboard() {
  return (
    <>
      <Main>
        <Header>
          <Logo>FindMyJob </Logo>
          <IconContainer>
            <Icon className="fas fa-user-circle" id="avatar" alt="avatar"></Icon>
            <Icon className="fas fa-bell" id="bell" alt="notification"></Icon>
            <Icon className="fas fa-cog" id="options" alt="options"></Icon>
            <ButtonSign id="sign up">Sign up</ButtonSign>
            <ButtonSign id="sign in">Sign in</ButtonSign>
          </IconContainer>
        </Header>
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
            <SearchButton>Find</SearchButton>
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
