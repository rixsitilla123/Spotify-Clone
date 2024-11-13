import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarItem({ path, icon, title, extraStyle }) {
	return (
		<NavLink className={`text-white flex items-center space-x-[25px] opacity-60 ${extraStyle}`} to={path}>
			{icon}
			<strong className="text-white text-[18px] leading-[23px] font-['CircularStdBold']">{title}</strong>
		</NavLink>
	)
}

export default NavbarItem