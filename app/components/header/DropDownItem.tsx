import Link from "next/link";

interface DropDownItemProps {
    href: string
    label: string
    DropDownClose: () => void
}
const DropDownItem: React.FC<DropDownItemProps> = ({
    href,
    label,
    DropDownClose
}) => {
    return (
        <Link onClick={DropDownClose} href={href} className="flex flex-col gap-4  py-4 items-center border-b-[1px] border-gray-200  ">
            {label}
        </Link>
    );
}

export default DropDownItem;