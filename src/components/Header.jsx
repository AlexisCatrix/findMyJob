import {
  Header,
  Logo,
  IconContainer,
  Icon,
  ButtonSign,
  ButtonSection,
} from "../styled-components/HeaderStyled";

export default function HeaderSection() {
  return (
    <Header>
      <Logo>FindMyJob </Logo>
      <IconContainer>
        <Icon className="fas fa-user-circle" id="avatar" alt="avatar"></Icon>
        <Icon className="fas fa-bell" id="bell" alt="notification"></Icon>
        <Icon className="fas fa-cog" id="options" alt="options"></Icon>
        <ButtonSection>
          <ButtonSign id="sign up">Sign up</ButtonSign>
          <ButtonSign id="sign in">Sign in</ButtonSign>
        </ButtonSection>
      </IconContainer>
    </Header>
  );
}
