import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon } from '../assets/images/icon'

function NavigateBtn({ bg, shadow }) {
	const navigate = useNavigate()
	return (
		<div className={`flex items-center gap-[22px] py-[20px] shadow-lg px-[40px] ${bg} ${shadow}`}>
			<button onClick={() => navigate(-1)} className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center opacity-50 bg-[#000] text-[#fff] hover:opacity-100 duration-500 hover:text-[#fff]"><ArrowLeftIcon /></button>
			<button onClick={() => navigate(+1)} className="w-[40px] h-[40px] rounded-[50%] flex items-center justify-center opacity-50 bg-[#000] text-[#fff] hover:opacity-100 duration-500 hover:text-[#fff]"><ArrowRightIcon /></button>
		</div>
	)
}

export default NavigateBtn