import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../hooks/usePath'
import { Home, Like, Serach, Single } from '../pages/Dashboard'

function CustomRoutes() {
	return (
		<Routes>
			<Route path={PATH.home} element={<Home />} />
			<Route path={PATH.search} element={<Serach />} />
			<Route path={PATH.like} element={<Like />} />
			<Route path={PATH.single} element={<Single />} />
		</Routes>
	)
}

export default CustomRoutes