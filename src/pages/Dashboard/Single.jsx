import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hooks/useEnv'
import NavigateBtn from '../../components/NavigateBtn'

function Single() {
	const { id } = useParams()
	const { accessToken } = useContext(Context)

	const spotifyApi = new SpotifyWebApi({
		clientId: CLIENT_ID
	})

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken)
	}, [accessToken])

	const [singleMusic, setSingleMusic] = useState({})
	useEffect(() => {
		if (accessToken && id) {
			spotifyApi.getAlbum(id).then((res) => {
				setSingleMusic(res.body)
			})
		}
	}, [accessToken])

	// console.log(singleMusic);

	return (
		<div className='singlePage-music h-[100vh]'>
			<NavigateBtn bg={"bg-[#DDF628]"} shadow={"shadow-[#DDF628]"} />
			<div className="px-[40px] flex space-x-[32px]">
				{/* <img className='w-[270px] h-[270px]' src={singleMusic.images[0].url} alt="single Music img" width={270} height={270} /> */}
				<div>
					<p className="text-[#fff] text-[16px] leading-[20px] tracking-[-2%] font-['CircularStdMedium'] uppercase">{singleMusic.label}</p>
					<h4 className="text-white text-[70px] leading-[80px] font-['CircularStdBlack'] mb-[12px]">{singleMusic.name}</h4>
					{/* <p className="text-white text-[20px] leading-[25px] font-['CircularStdBook'] mb-[12px]">{singleMusic.artists[0].name}</p> */}
					<p className="text-white text-[18px] leading-[23px] font-['CircularStdBold']">{singleMusic.release_date}</p>
				</div>
			</div>
		</div>
	)
}

export default Single