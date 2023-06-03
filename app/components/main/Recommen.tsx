import Image from "next/image"
import Link from "next/link"
interface DataProps {
    id: String
    filmChineseName: String
    rating: String
    filmAvatar: String
    filmVideo: String
    filmDescription: String
    releaseDate: string

}

const Recommend: React.FC<DataProps> = ({
    id,
    filmAvatar,
    filmChineseName,
    filmDescription,
    filmVideo,
    rating,
    releaseDate

}) => {
    return (
        <div className=" w-[500px] h-[500px]  border ">
            <p>{filmChineseName}</p>
            <p>{rating}</p>
            <p>{releaseDate}</p>
            <p className=" line-clamp-3 ">{filmDescription}</p>
            <p className=" truncate ">{filmVideo}</p>

            <Link href={`/movies/${id}`}>
                <Image width={100} height={100} src={filmAvatar as string} alt={filmChineseName as string} />
            </Link>

            <div>
                <video src={filmVideo as string} width={500} height={500} controls loop />
            </div>
            <p>{id}</p>
            <hr />
        </div>

    );
}

export default Recommend;