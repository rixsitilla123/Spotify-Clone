import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../../hooks/useEnv'
import NavigateBtn from '../../components/NavigateBtn'
import { SinglePageDownloadIcon, SinglePageLikeIcon, SinglePageMoreIcon, SinglePagePlayIcon, SinglePageSearchIcon, SinglePageSelectArrowIcon, SinglePageTableLikeIcon, SinglePageTableTimeIcon } from '../../assets/images/icon'

function Single() {
	const { id } = useParams()
	const { accessToken, setPlay, setPlaying } = useContext(Context)
	const [singleMusic, setSingleMusic] = useState({})

	const spotifyApi = new SpotifyWebApi({
		clientId: CLIENT_ID
	})

	useEffect(() => {
		if (!accessToken) return;
		spotifyApi.setAccessToken(accessToken)
	}, [accessToken, singleMusic])

	useEffect(() => {
		if (accessToken && id) {
			spotifyApi.getAlbum(id).then((res) => {
				setSingleMusic(res.body)
			})
		}
	}, [accessToken, id])

	const [artistMusics, setArtistMusics] = useState([])
	useEffect(() => {
		if (accessToken && singleMusic.name) {
			spotifyApi.searchTracks(singleMusic?.artists[0]?.name).then(res => {
				setArtistMusics(res.body.tracks.items.map(item => {
					const data = {
						id: item.id,
						img: item.album.images[0].url,
						name: item.name,
						artistName: item.artists[0].name,
						date: item.album.release_date,
						 uri: item.uri
					}
					return data
				}))
			})
		}
	}, [accessToken, singleMusic])

	function handlePlayMusic(uri) {
		setPlay(uri)
		setPlaying(true)
	}

	return (
		<div className='singlePage-music h-auto'>
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
			<div className="px-[40px] mt-[30px]">
				<table className="w-full">
					<thead>
						<tr className=''>
							<th className='py-[14px] border-b-[1px] border-slate-700 text-[#B3B3B3] text-[20px] text-center leading-[20px]'>#</th>
							<th className="py-[14px] border-b-[1px] border-slate-700 text-[#B3B3B3] text-[14px] text-left leading-[20px] tracking-[9%] font-['CircularStdBook'] uppercase">title</th>
							<th className="py-[14px] border-b-[1px] border-slate-700 text-[#B3B3B3] text-[14px] text-left leading-[20px] tracking-[9%] font-['CircularStdBook'] uppercase">album</th>
							<th className="py-[14px] border-b-[1px] border-slate-700 text-[#B3B3B3] text-[14px] text-left leading-[20px] tracking-[9%] font-['CircularStdBook'] uppercase">date added</th>
							<th className="py-[14px] border-b-[1px] border-slate-700 text-[#B3B3B3] text-[14px] text-end leading-[20px] pr-[15px] tracking-[9%] font-['CircularStdBook'] uppercase">Time</th>
						</tr> 
					</thead>
					<tbody>
						{artistMusics.map((item, index) => (
							<tr onClick={() => handlePlayMusic(item.uri)} className='cursor-pointer even:bg-[#00000040]'>
								<td className="text-[#B3B3B3] text-[20px] py-[15px] rounded-l-[12px] leading-[28px] tracking-[2%] font-['CircularStdBook'] pl-[30px]">{index + 1}</td>
								<td className='flex items-center py-[15px]'>
									<img className='w-[52px] h-[52px]' src={item.img} alt="music img" width={52} height={52} />
									<div className="ml-[15px]">
										<h2 className="text-white text-[16px] leading-[25px] tracking-[1%] line-clamp-1 font-['CircularStdBook']">{item.name}</h2>
										<p className="text-[#B3B3B3] text-[16px] leading-[23px] font-['CircularStdBook']">{item.artistName}</p>
									</div>
								</td>
								<td className="text-[#B3B3B3] text-[16px] py-[15px] leading-[23px] font-['CircularStdBook']">{item.name}</td>
								<td className="text-[#B3B3B3] text-[16px] py-[15px] leading-[23px] font-['CircularStdBook']">{item.date}</td>
								<td className='py-[15px] rounded-r-[12px]'>
									<div className="flex items-center space-x-[15px]">
										<button><SinglePageTableLikeIcon /></button>
										<span className="text-white text-[13px] leading-[20px] tracking-[-3%] font-['CircularStdBook']">3:03</span>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Single