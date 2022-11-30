import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDbz6Oy2WbMz3HjIL1pL5brNdKF81cbIV8",
  authDomain: "filmemovies-369ca.firebaseapp.com",
  projectId: "filmemovies-369ca",
})

export const auths = getAuth(firebaseConfig)
