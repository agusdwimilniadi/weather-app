import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface ISidebarItemProps {
    label: string
    href: string
    icon: IconType
    isActive?: boolean
}
const SidebarItem = (props: ISidebarItemProps) => {
    return (
        <Link href={props.href} className='flex items-center text-center w-[90%] mx-auto justify-center flex-col gap-2 p-2 rounded-xl transition-all duration-150 hover:bg-white/10'>
            <props.icon size={20} />
            <p className='text-sm'>{props.label}</p>
        </Link>
    )
}

export default SidebarItem