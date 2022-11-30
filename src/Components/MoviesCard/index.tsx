import { useContext } from "react"
import * as S from "./style"
import { moviesContext } from "../../context/moviesContext"
import { moviesType } from "../../@types/types"

type data = {
  dataArr: moviesType[]
}
const MoviesCard = () => {
  const { data }: any = useContext(moviesContext)

  console.log(data)

  return (
    <S.backgroundCard>
      <S.containerCard>
        <h2>filmes popular</h2>
        <S.block__Card>
          {data[0]?.map(
            (element: moviesType, index: number): JSX.Element => (
              <S.card__block key={index} data-aos="fade-right">
                <S.card__image>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500/" + element.poster_path
                    }
                    alt=""
                  />
                </S.card__image>
              </S.card__block>
            )
          )}
        </S.block__Card>
      </S.containerCard>
    </S.backgroundCard>
  )
}

export default MoviesCard
