import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CreateGlobalStyle } from "./styles/globalstyles"
import Home from "./page/Home"
import { MoviesProvider } from "./context/moviesContext"
import { Login } from "./page/Login"
import { Register } from "./page/Register"
import { PrivateRouter } from "./page/Home/PrivateRouter"
import "./firebase"

function App() {
  return (
    <>
      <MoviesProvider>
        <CreateGlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={
                  <Home />
              }
            />
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </>
  )
}

export default App
