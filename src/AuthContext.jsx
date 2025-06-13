import { createContext, useContext, useState } from "react";

const ApiSignUp = "https://fsa-jwt-practice.herokuapp.com/signup";
const ApiAuthenticate = "https://fsa-jwt-practice.herokuapp.com/authenticate";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState();
  const [location, setLocation] = useState("GATE");
  const [username, password] = useState("")

  // TODO: signup
  const signUp = async (event) => {
    event.preventDefault()

    const response = await fetch('https://fsa-jwt-practice.herokuapp.com',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        username: "faraday-fan",
        password: "induction-1800's"
      })
    })
  }
  

  // TODO: authenticate

  const Authenitcate = async(event) => {
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    
  }

  const value = { location, Authenitcate, setToken, signUp };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
