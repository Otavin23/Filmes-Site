import { useEffect } from "react"
import "aos/dist/aos.css"
import * as S from "./style"
import Aos from "aos"

//Imagens 
import Header from "../../Components/Header"
import imageBackground from "../../assets/main-images/wandinhaBackground.webp"
import NameImagePrimary from "../../assets/main-images/nameMovie.webp"


const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    })
  }, [])

  return (
    <>
      <S.bg__imageMovie>
        <div id="launcherBg" className="enabled" style={{
          backgroundImage: `url(./${imageBackground})` 
        }}></div>
      </S.bg__imageMovie>
      <Header />
      <S.main__bg>
        <img src={NameImagePrimary} alt="" width="650px" />
        <S.buttons__redirect>
          
          <button className="button__viewSerie-element alignItemsCenter justifyContentCenter">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 511.03 511.03"><path d="M416.809 200.418L152.282 14.389C130.151-.972 107.89-4.358 89.145 5.798c-17.054 8.591-27.338 29.03-27.338 54.676v390.802c0 25.646 10.284 46.084 27.338 54.676 6.769 3.385 13.669 5.077 22.131 5.077 11.977 0 27.338-5.077 41.007-11.977L416.81 313.023c20.439-13.669 32.414-34.107 32.414-56.368-.001-22.259-11.977-42.698-32.415-56.237zm-20.568 83.575L131.714 470.022c-10.284 8.591-20.439 10.285-27.338 6.769-6.769-3.385-10.284-13.669-10.284-25.646V60.344c0-13.669 3.385-22.13 10.284-25.646 1.692-1.692 5.077-1.692 6.769-1.692 5.077 0 13.669 1.692 22.13 8.591l264.527 186.029c10.284 6.769 17.054 17.053 17.054 27.338.261 10.285-6.639 20.438-18.615 29.029z"></path></svg>
            Assistir Serie
          </button>
          
          <button className="button__seelater-element alignItemsCenter justifyContentCenter">  
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 294.843 294.843"><g fill="#FFF"><path d="M212.921 0h-131a6 6 0 0 0-6 6v282.843a6 6 0 0 0 9.73 4.699l65.491-51.992a6 6 0 1 0-7.461-9.399L87.92 276.418V12h119v264.421l-26.771-21.247a6 6 0 0 0-7.459 9.4l36.501 28.969a6.002 6.002 0 0 0 9.73-4.7V6a6 6 0 0 0-6-6z"></path><path d="M102.921 35.755h89a6 6 0 0 0 0-12h-89a6 6 0 0 0 0 12zM102.921 59.409h89a6 6 0 0 0 0-12h-89a6 6 0 0 0 0 12zM165.421 71.063h-62.5a6 6 0 0 0 0 12h62.5a6 6 0 0 0 0-12z"></path></g></svg>
            Adicionar a ver depois
          </button>

        </S.buttons__redirect>
      </S.main__bg>
    </>
  )
}
export default Home
