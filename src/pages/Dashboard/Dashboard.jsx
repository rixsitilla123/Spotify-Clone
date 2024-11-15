import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import useAuth from '../../hooks/useAuth'
import CustomRoutes from '../../routes'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import SpotifyWebPlayer from 'react-spotify-web-playback'

function Dashboard({ code }) {
	const getCode = useAuth(code)
	const { accessToken, play, setPlaying, playing } = useContext(Context)
	return (
		<div className='flex justify-between relative h-[100vh]'>
			<Navbar />
			<div className="w-[60%] h-[88vh] overflow-y-auto"><CustomRoutes /></div>
			<Sidebar />
			<div className="absolute w-full bottom-0">
				<SpotifyWebPlayer
					token={accessToken}
					uris={play ? [play] : []}
					play={playing}
					callback={(e) => {
						if (e.isPlaying) {
							setPlaying(false)
						}
					}}
				/>
			</div>
		</div>
	)
}

export default Dashboard