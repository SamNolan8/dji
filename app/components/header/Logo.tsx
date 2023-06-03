import Image from "next/image"
import Link from "next/link"
const Logo = () => {
    return (
        <Link href="/" className="flex-1 ml-[20px] xl:ml-0 xl:flex-none  ">
            <Image src="/images/logo.png" width={50} height={50} alt="logo" />
        </Link>
    )
}
export default Logo