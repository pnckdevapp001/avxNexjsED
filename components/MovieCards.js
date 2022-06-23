import Link from "next/link";

const MovieCards = (props) => {
    const { MovieCard } = props
    let poster_path = `${MovieCard.poster_path.replace("http://","https://")}`
    if (MovieCard.poster_path == null) {
        poster_path = "https://clip.avfreex24.com/wp-content/uploads/2022/05/landingPage.png"
    }
    return (  
        <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
        <div className="card rounded-md overflow-hidden">
            <Link key={MovieCard.id} href="/movie/[id]" as={`/movie/${MovieCard.id}`}>
            <a title={`ดูหนังAV ${MovieCard.name}`}>
            <img className="w-10/11 hover:opacity-70" title={`ดูหนังAV ${MovieCard.original_name}`} src={poster_path} alt={`ดูหนังAV ${MovieCard.original_name}`} width="2250px" height="1500px"/>
            </a>
            </Link>
        </div>
        <h2 className="text-white">หนังAV รหัส: {MovieCard.dso_title}</h2>
        <p className="text-white text-md">{MovieCard.name}</p>
        <p className="text-white text-md">นักแสดงAV: {MovieCard.vod_actor}</p>
        </div>           
        )

}
 
export default MovieCards;