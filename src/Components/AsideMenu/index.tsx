import React from "react"
import * as S from "./style"
import square from "../../assets/imagesAside/square.webp"
import movie from "../../assets/imagesAside/movie.webp"
import tv from "../../assets/imagesAside/tv.webp"
import star from "../../assets/imagesAside/estrela.webp"
import setting from "../../assets/imagesAside/setting.webp"
import leave from "../../assets/imagesAside/icon.png"

export const AsideMenu = () => {
  return (
    <S.BackgroundAside>
      <S.ContainerAside>
        <S.aside__nav>
          <ul className="nav__options">
            <li className="ul__home">
              <img width="25px" src={square} alt="" />
            </li>
            <li>
              <img width="25px" src={movie} alt="" />
            </li>
            <li>
              <img width="25px" src={tv} alt="" />
            </li>
            <li>
              <img width="25px" src={star} alt="" />
            </li>
            <li>
              <img width="25px" src={setting} alt="" />
            </li>
            <li className="ul__perfil">
              <img width="25px" src={leave} alt="" />
              otavio
            </li>
          </ul>
        </S.aside__nav>
      </S.ContainerAside>
    </S.BackgroundAside>
  )
}
export default AsideMenu
