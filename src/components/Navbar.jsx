import React from 'react'
import { PATH } from "../hooks/usePath"
import { CreatePageIcon, HomePageIcon, LibraryPageIcon, LikePageIcon, SearchPageIcon } from '../assets/images/icon'
import NavbarItem from './NavbarItem'

function Navbar() {
	const navbarCategory = [
		{
			id: 1,
			title: "Chill Mix"
		}, {
			id: 2,
			title: "Insta Hits"
		}, {
			id: 3,
			title: "Your Top Songs 2021"
		}, {
			id: 4,
			title: "Mellow Songs"
		}, {
			id: 5,
			title: "Anime Lofi & Chillhop Music"
		}, {
			id: 6,
			title: "BG Afro “Select” Vibes"
		}, {
			id: 7,
			title: "Afro “Select” Vibes"
		}, {
			id: 8,
			title: "Happy Hits!"
		}, {
			id: 9,
			title: "Deep Focus"
		}, {
			id: 10,
			title: "Instrumental Study"
		}, {
			id: 11,
			title: "OST Compilations"
		}, {
			id: 12,
			title: "Nostalgia for old souled mill..."
		}, {
			id: 13,
			title: "Mixed Feelings"
		},
	]
	return (
		<div className='w-[20%] h-[88vh] py-[72px] px-[34px] bg-[#000] overflow-y-auto'>
			<div className="space-y-[24px] mb-[50px]">
				<NavbarItem path={PATH.home} icon={<HomePageIcon />} title={"Home"} />
				<NavbarItem path={PATH.search} icon={<SearchPageIcon />} title={"Search"} />
				<NavbarItem path={"#"} icon={<LibraryPageIcon />} title={"Your Library"} extraStyle="!opacity-60" />
			</div>
			<div className="space-y-[20px] mb-[20px]">
				<NavbarItem path={"#"} icon={<CreatePageIcon />} title={"Create Playlist"} extraStyle="!opacity-60" />
				<NavbarItem path={PATH.like} icon={<LikePageIcon />} title={"Liked Songs"} extraStyle="!opacity-100" />
			</div>
			<span className="w-full h-[2px] bg-[#282828] inline-block"></span>
			<div className="space-y-[18px] mt-[25px]">
				{navbarCategory.map(item => (
					<p className="text-[#B3B3B3] text-[18px] leading-[23px] font-['CircularStdBook'] line-clamp-1 cursor-pointer duration-500 hover:text-[#fff]" key={item.id}>{item.title}</p>
				))}
			</div>
		</div>
	)
}

export default Navbar