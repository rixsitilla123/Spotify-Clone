import { createContext, useState } from "react";

export const Context = createContext()

export const UniContext = ({ children }) => {
	const [accessToken, setAccessToken] = useState(null)

	return (<Context.Provider value={{ accessToken, setAccessToken }}>{children}</Context.Provider>)
}