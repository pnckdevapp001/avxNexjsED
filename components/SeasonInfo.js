import Link from "next/link";

const SeasonInfo = (props) => {
    const { SeasonDetail, tvID } = props
    const epArray = SeasonDetail.episodes
    return (       
        <div className="text-center min-h-screen season-details md:mx-24">
            <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row season-container place-content-center">
                <div>
                    <h2 className="text-4xl mt-4 md:mt-0 font-semibold text-gray-300">Season {SeasonDetail.season_number}</h2>
        
                    <p className="text-gray-300 mt-8">
                        {SeasonDetail.overview}
                    </p>
            </div>
        </div>
         <div className="pt-2 pb-8">
              <iframe className="w-full aspect-video sm: pr-4 pl-4" src={`https://www.2embed.ru/embed/tmdb/tv?id=${tvID}&s=${SeasonDetail.season_number}&e=1`} frameBorder={`0`} allowFullScreen={true}></iframe>
          </div>
          <div className="flex flex-wrap flex-row justify-center h-full">
          {epArray.map((element, index) => {
              {if (element.still_path == null) {
                return (
                    <div key={index+1} className="px-2 py-2 overflow-hidden">
                    <Link href="/tv/[id]/season/[seasonid]/[epid]" as={`/tv/${tvID}/season/${SeasonDetail.season_number}/${index+1}`}>
                    <a key={index+2}>
                    <img key={index+3} className="card w-72 rounded-sm hover:opacity-70" src={`https://i.imgur.com/HIYYPtZ.png`} alt={element.name} />
                    <p key={index+4} className="bg-zinc-800 max-w-[18rem] rounded-sm break-words text-gray-300 text-sm leading-0 font-semibold py-2">{SeasonDetail.season_number} x {index+1} : {element.name}</p>
                    </a>
                    </Link>
                    </div>
                )
              }
            else {
                return (
                    <div key={index+1} className="px-2 py-2 overflow-hidden">
                    <Link href="/tv/[id]/season/[seasonid]/[epid]" as={`/tv/${tvID}/season/${SeasonDetail.season_number}/${index+1}`}>
                    <a key={index+2}>
                    <img key={index+3} className="card w-72 rounded-sm hover:opacity-70" src={`https://image.tmdb.org/t/p/w342${element.still_path}`} alt={element.name} />
                    <p key={index+4} className="bg-zinc-800 max-w-[18rem] rounded-sm break-words text-gray-300 text-sm leading-0 font-semibold py-2">{SeasonDetail.season_number} x {index+1} : {element.name}</p>
                    </a>
                    </Link>
                    </div>
                ) 
            }}
          })}
          </div>
          </div>
     );
}
 
export default SeasonInfo;