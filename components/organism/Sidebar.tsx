import React from 'react'
import SidebarItem from '../atoms/SidebarItem'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import { RxDashboard } from 'react-icons/rx'
import { FcSettings } from 'react-icons/fc'
import { CgMore } from 'react-icons/cg'

const Sidebar = () => {
    return (
        <div className='bg-[#202D3E] lg:w-fit text-white px-1 py-5  rounded-xl'>
            <div id="logo" className='lg:flex items-center hidden justify-center bg-white/10 w-fit h-fit mx-auto p-3 rounded-full mb-5'>
                <TiWeatherWindyCloudy size={30} />
            </div>
            <div className='flex flex-row lg:flex-col gap-3'>
                <SidebarItem href='/' icon={RxDashboard} label='Home' />
                <SidebarItem href='#' icon={FcSettings} label='Settings' />
                <SidebarItem href='#' icon={CgMore} label='Other menu' />
            </div>
        </div>
    )
}

export default Sidebar