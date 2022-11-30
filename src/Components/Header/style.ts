
import styled from "styled-components"


export const header__bg = styled.header`
  height: 5rem;
  width: 100%;
  border-bottom: 1px solid #ffffff17;

`


export const header__container = styled.div`
  max-width: 1400px;
  width: 90%;

  #logo{
    z-index: 1;
  }
`

export const nav__links = styled.nav`
  width: 65%;
  height: 100%;
`

export const ul__linkshref = styled.ul`
  list-style: none;
  height: 100%;

  li{
    height: 100%; 
  }

  li a{
    text-decoration: none;
    color: #fff;
    opacity: 0.7;
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 100%;
    padding: 0 1.5rem;
    border: 1px solid transparent;
  }

  .li__href-active{ 
    height: 100%;
    border-bottom: 1px solid #B26923;
  }

  .li__href-active a{
    color: #fff;
    opacity: 1;
  }

  li a:hover{
    border-bottom: 1px solid #845023;
    color: #fff;
    opacity: 1 !important;
  }

`

export const nav__blocksLocal = styled.nav`
  display: flex;
  height: 100%;
  z-index: 1;
  img{
    cursor: pointer;
  }

  button{
    border: none;
    background: transparent;
    color: #fff;
    margin: 0 0 0 2rem;
    font-weight: 600;
    font-size: 13px;
    padding: 0.6rem 1rem;
    cursor: pointer;

    svg{
      margin: 0 0.5rem 0 0;
      fill: #fff;
    }
    transition: .3s;
  }

  button:hover{
    padding: 0.6rem 1rem;
    color: #000000;
    background: #fff;
    border-radius: 2rem;

    svg{
      fill: #000000;
    }
  }

` 
