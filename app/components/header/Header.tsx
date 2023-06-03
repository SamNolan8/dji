"use client"
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Logo from './Logo'
import Nav from './Nav'
import UserInfo from './UserInfo'
import DropDown from './DropDown'

const Header = () => {
    const pathName = usePathname()
    const routes = useMemo(() => [
        {
            label: '首页',
            href: '/',
        },
        {
            label: '电影',
            href: '/movies ',
        },
        {
            label: '电视剧',
            href: '/tv ',
        },
        {
            label: '探索',
            href: '/explore ',
        },
        {
            label: '影视',
            href: '/video ',
        },

    ], [pathName])
    return (
        <div className=' fixed xl:relative  w-full shadow-sm z-10  h-[80px]  flex items-center bg-pink-200' >
            <div className='  flex items-center w-full   max-w-[2520px]   xl:px-40 md:px-20 sm:px-8 px-8'>
                <DropDown />
                <Logo />
                <Nav />
                <UserInfo />
            </div>
        </div>
    )

}

export default Header


