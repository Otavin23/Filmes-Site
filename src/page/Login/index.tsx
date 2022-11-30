import React, { useContext, useState } from "react"
import * as S from "./style"
import { Link, useNavigate } from "react-router-dom"
import { moviesContext } from "../../context/moviesContext"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const { loginUSer }: any = useContext(moviesContext)

  const handleUserLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    try {
      await loginUSer(email, password)
      navigate("/home")
    } 
    catch {
      setError(true)
    }

  }

  return (
    <S.backgroundLogin>
      <S.form__login>
        <h1>conta de usuário</h1>
        <span>uma unica conta, conteudo infinitamente gratis</span>
        <input
          type="text"
          placeholder="seu email"
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <input
          type="password"
          placeholder="sua senha"
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <button onClick={handleUserLogin}>logar na conta</button>

        <span
          className="userText user--error"
          style={{
            display: error ? "inline" : "none",
          }}
        >
          Email não encontrado, faça um novo cadastro.
        </span>

        <span className="user__rec">
          Ainda não é usuário?<Link to="/register">Faça seu Cadastro!</Link>
        </span>
      </S.form__login>
    </S.backgroundLogin>
  )
}
export default Login
