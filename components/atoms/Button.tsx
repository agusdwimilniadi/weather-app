import { cn } from '@sglara/cn'
import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconType
    isLoading?: boolean
}

const Button = ({ icon: Icon, children, isLoading, ...props }: ButtonProps) => {
    return (
        <button disabled={isLoading} {...props} className={cn('flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 transition-all duration-150 text-xs lg:text-base', props.className, isLoading && 'cursor-not-allowed bg-white/30')}>
            {Icon && <Icon className={cn('text-sm', isLoading && 'animate-spin')} size={20} />}
            {children}
        </button>
    )
}

export default Button
