import { createContext, useState } from "react";

export const Context = createContext()

export const UniContext = ({ children }) => {
	const [acceessToken, setAccessToken] = useState(null)

	return (<Context.Provider value={{ acceessToken, setAccessToken }}>{children}</Context.Provider>)
}