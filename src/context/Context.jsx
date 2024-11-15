import { createContext, useState } from "react";

export const Context = createContext()

export const UniContext = ({ children }) => {
	const [accessToken, setAccessToken] = useState(null)
	const [play, setPlay] = useState([])
	const [playing, setPlaying] = useState(false)
	
	return (<Context.Provider value={{ accessToken, setAccessToken, play, setPlay, playing, setPlaying }}>{children}</Context.Provider>)
}