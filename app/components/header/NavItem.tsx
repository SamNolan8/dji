import Link from "next/link"
interface NavItemProps {
    label: string
    href: string
}


const NavItem: React.FC<NavItemProps> = ({
    label,
    href
}) => {

    return (
        <Link href={href}
            className="flex flex-row gap-4  py-2 px-4 rounded-sm border-b-[2px] border-white  hover:border-b-[2px]  hover:border-slate-700 transition
         "
        >
            <p>{label}</p>
        </Link>
    )
}

export default NavItem