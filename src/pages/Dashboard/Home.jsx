import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import NavigateBtn from '../../components/NavigateBtn'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from "../../hooks/useEnv"

function Home() {
	const { accessToken } = useContext(Context)

	const spotifyApi = new SpotifyWebApi({
		clientId: CLIENT_ID
	})

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken)
	}, [accessToken])

	const [homeTopTracks, setHomeTopTracks] = useState([])
	useEffect(() => {
		if (accessToken) {
			spotifyApi.searchTracks("Hamdam Sobirov").then(res => {
				setHomeTopTracks(res.body.tracks.items.splice(0, 6).map(item => {
					const data = {
						id: item.id,
						trackName: item.name,
						trackImg: item.album.images[0].url,
						artistName: item.artists[0].name,
						uri: item.uri
					}
					return data
				}));
			})
		}
	}, [accessToken])

	return (
		<div className='bg-login h-full px-[40px]'>
			<NavigateBtn />
			<div className="py-[30px]">
				<h2 className="text-[#fff] text-[40px] font-['CircularStdBold'] leading-[50px] tracking-[-1%]">Good afternoon</h2>
				<ul className="flex items-center gap-[20px]">
					{homeTopTracks.map(item => (
						<li className="w-[49%] h-[32px] flex items-center justify-between flex-wrap space-y-[16px] gap-[30px]" key={item.id}>
							<h3 className="text-[20px] text-[#fff] font-bold leading-[25px] tracking-[1%]">{item.trackName}</h3>
							<img className='w-[82px] h-[82px]' src={item.trackImg} alt="track img" width={82} height={82} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Home