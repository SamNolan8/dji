import { getFilmById } from "@/app/hooks/getdData";
import Image from "next/image";
interface Props {
    params:{
        id:string
    }
}
const Movies = async ({params:{id}}:Props) => {
    const data   = await getFilmById(id)
    console.log('22222222222222222222222222222',data)
    return ( 
        <div>
            <p>{data?.filmChineseName}</p>
            <Image src={data?.filmAvatar as string} alt={data?.filmChineseName as string} width={200} height={200} />
            <video src={data?.filmVideo as string} width={500} height={500} controls loop />
        </div>
     );
}
 
export default Movies;