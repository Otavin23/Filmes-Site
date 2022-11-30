import { createContext, ReactNode, useEffect, useState } from "react"
import axios from "axios"
import { moviesType } from "../@types/types"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"

import { auths } from "../firebase"

interface movies {
  children: ReactNode
}

export const moviesContext = createContext({})

export const MoviesProvider = ({ children }: movies) => {
  const [user, setUser] = useState({})
  const [data, setData] = useState<moviesType[]>([])
  const auth = getAuth()

  const createUser = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password)

  const loginUSer = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password)

  useEffect(() => {
    const reqPromise = async () => {
      const req = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5f6d789565d22c8473d0ac958158e5e1"
      )
      console.log(req.data.results)
      setData([req.data.results])
    }
    reqPromise()
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auths, (currentUser: any): any => {
      return setUser(currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const contextValue = {
    data,
    createUser,
    loginUSer,
    user,
  }

  return (
    <moviesContext.Provider value={contextValue}>
      {children}
    </moviesContext.Provider>
  )
}
