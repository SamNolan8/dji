"use client"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import DropDownItem from "./DropDownItem"
const DropDown = () => {
  const pathName = usePathname()
  const routes = useMemo(() => [
    {
        label: '首页',
        href: '/',
    },
    {
        label: '电影',
        href: '/movie ',
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
  const [isDropDown, setIsDropDown] = useState(false)
  const DropDownClose = () => {
    setIsDropDown(false)
  }
  return (
    <div className="block xl:hidden relative transition  ">
      <div onClick={() => setIsDropDown((value) => !value)}
        className=" cursor-pointer hover:bg-slate-500 transition  "
      >按钮</div>
      {isDropDown && (
        <div className={`bg-orange-300 h-screen w-screen absolute top-[52px] -left-8 md:-left-20  px-8  overflow-y-auto
        `}>
          {
            routes.map((item) => (
              <DropDownItem  key={item.label} {...item} DropDownClose={DropDownClose}  />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default DropDown;