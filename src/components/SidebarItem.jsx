import React from 'react'
import { SidebarIcon3 } from '../assets/images/icon'

function SidebarItem() {
	return (
		<div className="flex items-center gap-[15px]">
			<span className='text-[#B3B3B3] hover:text-[#fff] duration-500 cursor-pointer'><SidebarIcon3 /></span>
			<div className="flex flex-wrap space-y-[7px]">
				<span className='rounded-[10px] bg-[#36363D] w-[100px] h-[10px] inline-block'></span>
				<span className='rounded-[10px] bg-[#36363D] w-[80px] h-[10px] inline-block'></span>
				<span className='rounded-[10px] bg-[#36363D] w-[80px] h-[10px] inline-block'></span>
			</div>
		</div>
	)
}

export default SidebarItem