import { CiShoppingCart } from "react-icons/ci";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/CartReducer/Cart-Slice";
import * as s from "./headerStyles";

interface LoginStatus {
  name: string;
  logged: boolean;
}

export const Header: React.FC = () => {
  const [login, setLogin] = useState({} as LoginStatus);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  function handleOpenCart() {
    dispatch(toggleCart());
  }
  return (
    <s.Header>
      <s.HeaderContainer>
        <div>
          {login.logged ? (
            <s.WelcomeText>
              Welcome <strong>{login.name}</strong>{" "}
            </s.WelcomeText>
          ) : (
            ""
          )}
          <s.PageTitle>Beauty Shop</s.PageTitle>
        </div>
        <div>
          <s.CartContainer isLogged={login.logged}>
            <s.CartButton onClick={handleOpenCart}>
              <CiShoppingCart />
            </s.CartButton>
            <s.LogoutButton
              onClick={() => {
                setLogin({
                  name: "",
                  logged: !login.logged,
                });
              }}
            >
              Logout
            </s.LogoutButton>
          </s.CartContainer>
          <s.FormLogin isLogged={login.logged}>
            <s.LabelLogin>Login</s.LabelLogin>
            <div>
              <s.InputUser
                placeholder="Digite seu nome"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></s.InputUser>
              <s.LoginButton
                onClick={(e) => {
                  e.preventDefault();
                  if (inputValue.length < 3) {
                    window.alert("Invalid User");
                    return;
                  }
                  setLogin({
                    name: inputValue,
                    logged: !login.logged,
                  });
                  setInputValue("");
                }}
              >
                Acessar
              </s.LoginButton>
            </div>
          </s.FormLogin>
        </div>
      </s.HeaderContainer>
    </s.Header>
  );
};
