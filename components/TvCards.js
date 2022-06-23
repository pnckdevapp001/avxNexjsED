import Link from "next/link";

const TvCards = (props) => {
    const { TvCard } = props
    let poster_path = `https://image.tmdb.org/t/p/w342${TvCard.poster_path}`
    if (TvCard.poster_path == null) {
        poster_path = 'https://clip.avfreex24.com/wp-content/uploads/2022/05/landingPage.png'
    }
    return (
    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5">
    <div className="card rounded-md overflow-hidden">
        <Link key={TvCard.id} href="/tv/[id]" as={`/tv/${TvCard.id}`}>
        <a title={TvCard.title}>
        <img className="w-10/11 hover:opacity-70" title={`ดูซีรีย์ออนไลน์ X${TvCard.id}`} src={poster_path} alt={`ดูหนังออนไลน์ X ${TvCard.title}`} width="1500px" height="2250px"/>
        </a>
        </Link>
    </div>
    </div>           
     );
}
 
export default TvCards;