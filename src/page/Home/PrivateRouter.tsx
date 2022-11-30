import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { moviesContext } from "../../context/moviesContext"

export const PrivateRouter = ({ children }: any) => {
  const { user }: any = useContext(moviesContext)

  if (user) return <Navigate to="/home" />
  return children
}

export default PrivateRouter
