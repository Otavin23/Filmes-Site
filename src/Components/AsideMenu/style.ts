
import styled from "styled-components"

export const BackgroundAside = styled.aside`
  //background: #1b1a1f;
  width: 15%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerAside = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //height: 70%;
  height: 70%;
`

export const aside__nav = styled.nav`
  display: flex;
  justify-content: center;
  height: 90%;

  .nav__options {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  li {
    cursor: pointer;
    img {
      transition: all 0.5s ease;
    }
    &:hover {
      img {
        transform: scale(1.5);
      }
    }
  }

  .ul__home {
    background: red;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #00b7ca;
  }

  .ul__perfil {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 17px;

    img {
      padding: 0 0 1rem 0;
      width: 50px;
    }
  }
`
