import ReactJWPlayer from "react-jw-player";

const MovieInfo = (props) => {
    const { MovieDetail } = props
    return (
        <div className="min-h-screen movie-details md:mx-24">
            <div className="container mx-auto px-4 py-11 flex flex-col md:flex-row movie-container">
                <div>
                    <h2 className="text-xl mt-4 md:mt-0 font-semibold text-gray-300">{MovieDetail["list"][0].vod_name}</h2>
                    <div className="flex flex-wrap items-center text-gray-300 text-sm my-4">
                        <svg className="fill-current text-orange-500 w-4" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z" data-name="star" /></g></svg>
                        <span className="ml-1">{MovieDetail["list"][0].vod_actor}</span>
                        <span className="mx-2">|</span>
                        <span>{MovieDetail["list"][0].vod_time} || {MovieDetail["list"][0].vod_addtime}</span>
                        <span className="mx-2">|</span>
                        <span>ประเภท: {MovieDetail["list"][0].type_name} || {MovieDetail["list"][0].category}</span>
                        <span className="mx-2">|</span>
                        <span>AVFREEX24</span>
                    </div>

                    <p className="text-gray-300 mt-8 text-sm">
                        {MovieDetail["list"][0].type_name} {MovieDetail["list"][0].vod_time} {MovieDetail["list"][0].vod_name}
                    </p>
                </div>
            </div>
            <div className="pt-2 pb-8">
                <div
                    className="jw-video-container"
                    data-mediaid="AVFREEX24"
                    style={{ height: "100%", width: "100%" }}
                >
                    <ReactJWPlayer
                        playerId="AVFREEX24"
                        key="uoW6qHjBL3KNudxKVnwa3rt5LlTakbko9e6aQ6VUyKQ="
                        playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
                        file={MovieDetail["list"][0].vod_play_url}
                        image={MovieDetail["list"][0].vod_pic.replace("http://","https://")}
                    // onReady={onReady}
                    />
                </div>
                {/* <iframe className="w-full aspect-video sm: pr-4 pl-4" src={`https://www.2embed.ru/embed/tmdb/movie?id=${MovieDetail.id}`} frameBorder={`0`} allowFullScreen={true}></iframe> */}
            </div>
        </div>
    );
}

export default MovieInfo;