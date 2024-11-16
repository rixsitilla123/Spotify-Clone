import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hooks/useEnv'
import NavigateBtn from '../../components/NavigateBtn'
import { SinglePageDownloadIcon, SinglePageLikeIcon, SinglePageMoreIcon, SinglePagePlayIcon, SinglePageSearchIcon, SinglePageSelectArrowIcon } from '../../assets/images/icon'

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

	return (
		<div className='singlePage-music h-[100vh]'>
			<NavigateBtn bg={"bg-[#DDF628]"} shadow={"shadow-[#DDF628]"} />
			<div className="px-[40px] flex space-x-[32px] mb-[62px]">
				{singleMusic?.images && <img className='w-[270px] h-[270px]' src={singleMusic?.images[0].url} alt="single Music img" width={270} height={270} />}
				<div>
					<p className="text-[#fff] text-[16px] leading-[20px] tracking-[-2%] font-['CircularStdMedium'] uppercase">{singleMusic.label}</p>
					<h4 className="text-white text-[70px] leading-[80px] font-['CircularStdBlack'] mb-[12px]">{singleMusic.name}</h4>
					{singleMusic?.artists && <p className="text-white text-[20px] leading-[25px] font-['CircularStdBook'] mb-[12px]">{singleMusic?.artists[0]?.name}</p>}
					<p className="text-white text-[18px] leading-[23px] font-['CircularStdBold']">{singleMusic.release_date}</p>
				</div>
			</div>
			<div className="flex items-center justify-between px-[40px] mb-[45px]">
				<div className="flex items-center space-x-[28px]">
					<button className="w-[72px] h-[72px] flex items-center justify-center bg-[#65D36E] rounded-[50%]"><SinglePagePlayIcon /></button>
					<button className='text-white'><SinglePageLikeIcon /></button>
					<button className='text-white'><SinglePageDownloadIcon /></button>
					<button className='text-white'><SinglePageMoreIcon /></button>
				</div>
				<div className="flex items-center space-x-[36px]">
					<button className="text-white"><SinglePageSearchIcon /></button>
					<div className="flex items-center space-x-[15px] cursor-pointer">
						<strong className="text-white text-[18px] leading-[23px] tracking-[-1%] font-['CircularStdBook']">Custom order</strong>
						<button className="text-white"><SinglePageSelectArrowIcon /></button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Single