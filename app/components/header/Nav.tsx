"use client"
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import NavItem from './NavItem'
const Nav = () => {
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
        <div className=' ml-[100px] hidden xl:flex flex-1   gap-4 '>
            {
                routes.map((item) => (
                    <NavItem key={item.label}
                        {...item}
                    />
                ))
            }
        </div>);
}

export default Nav;