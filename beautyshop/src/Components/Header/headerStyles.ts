import styled from "styled-components";

interface LoginProps {
  isLogged: boolean;
}
//*** Containers do Header
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 1000px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: pink;
  border-radius: 0px 0px 5px 5px;
  @media (max-width: 1200px) {
    width: 950px;
    h1 {
      font-size: 36px;
    }
  }
  @media (max-width: 768px) {
    width: 600px;
    h1 {
      font-size: 26px;
    }
    input {
      width: 120px;
    }

    button:last-child {
      width: 60px;
      font-size: 14px;
      font-weight: 500;
    }
  }
  @media (max-width: 480px) {
    width: 350px;
    h1 {
      font-size: 20px;
    }
    input {
      width: 100px;
    }
    button {
      width: 50px;
      font-size: 12px;
      font-weight: 500;
    }
  }
  div:last-child {
    display: flex;
    gap: 10px;
  }
`;

//*** Titulos e subtitulos
export const PageTitle = styled.h1`
  padding-bottom: 12px;
`;

export const WelcomeText = styled.span``;

// *** Cart Container
export const CartContainer = styled.div<LoginProps>`
  display: ${(props) => (props.isLogged ? "flex" : "none")};
  gap: 1rem;
`;

export const CartButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #a82af5;
  color: black;
  cursor: pointer;
  display: flex;
  svg {
    font-size: 18px;

    color: white;
  }
`;

export const LogoutButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: red;
  color: white;
  width: 70px;
`;
// *** Formulário Login componentes :
export const FormLogin = styled.form<LoginProps>`
  display: ${(props) => (props.isLogged ? "none" : "flex")};
  flex-direction: column;
`;

export const LabelLogin = styled.label`
  font-size: 18px;
  padding: 10px 5px;
`;

export const InputUser = styled.input`
  padding: 7px 10px;
  border-radius: 5px;
  font-family: inherit;
`;

export const LoginButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #a82af5;
  width: 80px;
  color: white;
  font-weight: 600;
  font-size: 13px;
`;
