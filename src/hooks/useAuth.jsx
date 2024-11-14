import { useEffect, useContext } from 'react'
import { API_REQUEST } from './useEnv'
import axios from 'axios'
import { Context } from '../context/Context'

function useAuth(code) {
	const { setAccessToken } = useContext(Context)
	useEffect(() => {
		axios.post(`${API_REQUEST}/login`, { code }).then(res => {
			setAccessToken(res.data.accessToken)
			history.pushState({}, null, "/")
		})
		// .catch(() => {
		// 	location = "/"
		// })
	}, [])
}

export default useAuth