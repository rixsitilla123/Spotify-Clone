import React from 'react'
// import { CLIENT_ID } from '../../hooks/useEnv'

function Login() {
	const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=85ab93ef58bb46a49e6aad04f697da0b&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`

	return (
		<div className="w-full h-[100vh] flex items-center justify-center bg-login">
			<a className="w-[180px] p-[10px] rounded-[12px] bg-[#65D36E] text-white font-semibold text-[18px] leading-[22px] text-center duration-500 hover:scale-[1.3] shadow-md shadow-[#65D36E] hover:shadow-lg hover:shadow-[#65d36ee7]" href={AUTH_URL}>Login to Spotify</a>
		</div>
	)
}

export default Login