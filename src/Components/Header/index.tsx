import React from "react"
import * as S from "./style"

// Imagens 
import Logo from "../../assets/headerImages/logo.png"
import iconSearch from "../../assets/headerImages/searchIcon.png"

const Header = () => {
  return (
    <S.header__bg className="justifyContentCenter">
      <S.header__container className="justifyContentSpacebetween alignItemsCenter">
        
        <img src={Logo} id="logo" alt="" width="130px"/>
        
        <S.nav__links className="alignItemsCenter">
          <S.ul__linkshref className="alignItemsCenter">
            <li className="li__href-active justifyContentCenter alignItemsCenter">
              <a href="#">Início</a>
            </li>

            <li>
              <a href="#">Filmes</a>
            </li>

            <li>
              <a href="#">Séries</a>
            </li>
            
            <li>
              <a href="#">Animes</a>
            </li>

            <li>
              <a href="#">Aplicativo</a>
            </li>
          </S.ul__linkshref>
        </S.nav__links>

        <S.nav__blocksLocal className="alignItemsCenter">
          <img src={iconSearch} alt="" width="20px"/>
          <button className="alignItemsCenter">
            <svg viewBox="0 0 512 512" width="20px" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M471.387 325.012c-16.969-14.91-37.547-27.793-61.168-38.29-10.098-4.484-21.914.063-26.399 10.157-4.484 10.094.063 21.91 10.157 26.398 19.918 8.852 37.082 19.543 51.007 31.782C462.152 370.145 472 391.989 472 415v37c0 11.027-8.973 20-20 20H60c-11.027 0-20-8.973-20-20v-37c0-23.012 9.848-44.855 27.016-59.941C87.223 337.3 146.098 296 256 296c81.605 0 148-66.395 148-148S337.605 0 256 0 108 66.395 108 148c0 47.707 22.695 90.207 57.852 117.29-64.329 14.14-104.344 41.358-125.239 59.722C14.805 347.687 0 380.484 0 415v37c0 33.086 26.914 60 60 60h392c33.086 0 60-26.914 60-60v-37c0-34.516-14.805-67.313-40.613-89.988zM148 148c0-59.55 48.45-108 108-108s108 48.45 108 108-48.45 108-108 108-108-48.45-108-108zm0 0">
              </path>
            </svg>
            MINHA CONTA 
          </button>
        </S.nav__blocksLocal>

      </S.header__container>

    </S.header__bg>
  )
}

export default Header
