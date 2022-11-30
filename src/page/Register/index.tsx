import {useContext, useState } from "react"
import * as S from "./style"
import { Link, useNavigate } from "react-router-dom"
import { moviesContext } from "../../context/moviesContext"

export const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassoword] = useState("")
  const [error, setError] = useState(false)
  const [typeError, setTypeError] = useState("")
  const { createUser }: any = useContext(moviesContext)

  const navigate = useNavigate()

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (password.length < 6 && confirmPassword.length < 6) {
      setError(true)
      setTypeError("A senha deve ter no minimo 6 caracteres")
    }

    if (password !== confirmPassword) {
      setError(true)
      setTypeError("A senhas não se batem")
    }

    if (
      password === confirmPassword &&
      password.length >= 6 &&
      confirmPassword.length >= 6
    ) {
      setError(false)
      await createUser(email, password)
      navigate("/")
    }
  }

  return (
    <S.backgroundRegister>
      <S.formRegister>
        <h1>Novo usuário</h1>
        <span>Tenha acesso a sua conta em segundos.</span>
        <input
          type="text"
          placeholder="nome de usuário unico"
          required
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="email"
          placeholder="seu email"
          required
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="sua senha"
          required
          onChange={({ target }) => setPassword(target.value)}
        />

        <input
          type="password"
          placeholder="repita senha"
          required
          onChange={({ target }) => setConfirmPassoword(target.value)}
        />

        <button onClick={handleSubmit}>enviar cadastro</button>
        <label
          className="label label--error"
          style={{
            display: error ? "inline" : "none",
          }}
        >
          {typeError}
        </label>
        <span className="user__rec">
          Já é usuário?<Link to="/">Entre na sua Conta!</Link>
        </span>
      </S.formRegister>
    </S.backgroundRegister>
  )
}
export default Register
