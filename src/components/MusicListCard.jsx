import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

function MusicListCard({ item }) {
	const navigate = useNavigate()
	const {setPlaying, setPlay} = useContext(Context)
	function handlePlayMusicList() {
		setPlay(item.uri)
		setPlaying(true)
		navigate(`/music/${item.id}`)
	}
	return (
		<div onClick={handlePlayMusicList} className='min-w-[224px] rounded-[8px] bg-[#fff] p-[20px] music-list-card-item cursor-pointer'>
			<img className='w-[182px] h-[182px] mb-[25px]' src={item.albumImg} alt="album img" width={182} height={182} />
			<h3 className="text-[#fff] text-[20px] leading-[25px] tracking-[3%] font-['CircularStdBold'] mb-[10px]">{item.albumsName}</h3>
			<p className="text-[18px] text-[#B3B3B3] leading-[18px] font-['CircularStdBook']">{item.albumArtistName}</p>
		</div>
	)
}

export default MusicListCard