import Recommend from "./components/main/Recommen"
import { getFilm } from "./hooks/getdData"
export default async function Home() {
  const data = await getFilm()

  return (

    < div >
      ad        <div className=" flex flex-wrap flex-row gap-5 pt-[80px] xl:pt-0  h-[2550px] xl:px-40 md:px-20 sm:px-8 px-8 bg-red-300 ">
        {data.map((item) => (
          <Recommend key={item.id} id={item.id} filmAvatar={item.filmAvatar as string}
            filmChineseName={item.filmChineseName as string}
            filmDescription={item.filmDescription as string}
            filmVideo={item.filmVideo as string}
            rating={item.rating as string}
            releaseDate={item.releaseDate as string}
          />
        ))}


      </div>
    </div>
  )
}
