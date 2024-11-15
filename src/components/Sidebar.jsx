import React from 'react'
import { SidebarIcon1, SidebarIcon2 } from '../assets/images/icon';
import SidebarItem from './SidebarItem';

function Sidebar() {
	return (
		<div className='w-[20%] h-[88vh] bg-[#000] overflow-y-auto pt-[30px] px-[20px] pb-[70px]'>
			<div className="flex items-center justify-between mb-[50px]">
				<p className="text-[#CCCCCC] text-[20px] leading-[25px] tracking-[1%] font-['CircularStdBold']">Friend Activity</p>
				<div className="flex items-center gap-[24px]">
					<button className="text-[#B3B3B3] duration-500 hover:text-[#fff]"><SidebarIcon1 /></button>
					<button className="text-[#B3B3B3] duration-500 hover:text-[#fff]"><SidebarIcon2 /></button>
				</div>
			</div>
			<p className="text-[#CCCCCC] leading-[24px] text-[18px] font-['CircularStdBook'] mb-[24px]">Let friends and followers on Spotify see what you’re listening to.</p>
			<div className="space-y-[20px] mb-[20px]">
				<SidebarItem />
				<SidebarItem />
				<SidebarItem />
			</div>
			<p className="text-[#CCCCCC] text-[18px] leading-[25px] mb-[25px] font-['CircularStdBook']">Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
			<button className="w-[230px] h-[60px] rounded-[40px] bg-[#fff] text-[#171717] text-[18px] leading-[23px] tracking-[14$] font-['CircularStdBold'] uppercase duration-500 border-[1px] border-transparent hover:text-[#65D36E] hover:bg-transparent hover:border-[#65D36E]">Settings</button>
		</div>
	)
}

export default Sidebar