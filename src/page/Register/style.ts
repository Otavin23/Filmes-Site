import styled from "styled-components"

export const backgroundRegister = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`

export const formRegister = styled.form`
  max-width: 1440px;
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    color: #ffff;
    font-weight: 400;
  }
  span {
    color: #81838a;
    font-weight: 400;
    font-size: 14px;
    padding: 0.4rem 0 2.5rem 0;
  }
  input {
    width: 100%;
    height: 60px;
    border-radius: 0.5rem;
    border: none;
    background: rgba(255, 255, 255, 0.05);
    padding: 0 0 0 1rem;
    color: white;
    outline: none;
    margin: 0 0 1rem 0;
    font-size: 16px;
    font-weight: 400;
    ::placeholder {
      text-transform: capitalize;
      font-size: 14px;
      opacity: 0.7;
    }
    :focus {
      border: 1px solid orange;
    }
  }
  button {
    border: none;
    height: 60px;
    color: #ffff;
    font-weight: 400;
    font-size: 16px;
    background: transparent;
    border: 1px solid orange;
    border-radius: 2rem;
    text-transform: capitalize;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.05s ease;
    margin: 1.5rem 0 0.5rem 0;

    &:hover {
      background: orange;
      color: black;
    }
  }
  .user__rec {
    padding: 3rem 0 0 0;
    a {
      color: white;
      text-decoration: none;
      padding: 0 0 0 0.3rem;
      font-weight: 400;
    }
  }

  .label {
    color: white;
    font-size: 14px;
    color: #e4605e;

    display: none;
  }
`
