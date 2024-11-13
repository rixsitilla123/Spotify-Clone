import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import useAuth from '../../hooks/useAuth'
import CustomRoutes from '../../routes'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

function Dashboard({ code }) {
	const getCode = useAuth(code)
	const { acceessToken } = useContext(Context)
	return (
		<div className='flex justify-between'>
			<Navbar />
			<div className="w-[60%] h-[100vh] overflow-y-auto"><CustomRoutes /></div>
			<Sidebar />
		</div>
	)
}

export default Dashboard