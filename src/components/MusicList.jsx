import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context';
import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID } from '../hooks/useEnv';
import MusicListCard from './MusicListCard';

function MusicList({ API, MusicListTitle }) {
	const { accessToken } = useContext(Context)

	const spotifyApi = new SpotifyWebApi({
		clientId: CLIENT_ID
	})

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken)
	}, [accessToken])

	const [albums, setAlbums] = useState([])
	useEffect(() => {
		if (accessToken) {
			spotifyApi.searchAlbums(API).then(res => {
				setAlbums(res.body.albums.items.map(item => {
					const data = {
						id: item.id,
						albumsName: item.name,
						albumArtistName: item.artists[0].name,
						albumImg: item.images[0].url,
						uri: item.uri
					}
					return data
				}))
			})
		}
	}, [accessToken])
	return (
		<div>
			<div className="flex items-center justify-between mb-[25px]">
				<h3 className="text-[#fff] text-[30px] leading-[38px] tracking-[-3%] font-['CircularStdBold']">{MusicListTitle}</h3>
				<button className="text-[#ADADAD] text-[16px] leading-[20px] tracking-[8%] font-['CircularStdBold'] uppercase">See all</button>
			</div>
			<div className="flex justify-between overflow-x-auto gap-[30px]">
				{albums.map(item => <MusicListCard key={item.id} item={item} />)}
			</div>
		</div>
	)
}

export default MusicList