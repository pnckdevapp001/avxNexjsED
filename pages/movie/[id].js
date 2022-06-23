import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MovieInfo from '../../components/MovieInfo'
import { useEffect, useState } from "react"
import Head from 'next/head'

export async function getServerSideProps({ query }) {

  const { id } = query
  //console.log(id)
  //const apiKey = process.env.API_KEY
  //let genreArr = []
  const res = await fetch(
    `https://mgzyz1.com/api.php/provide/vod/?ac=detail&ids=${id}`
    //`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=th-TH`
  )
  const datax = await res.json()
  if (res.ok) {
    return {
      props: { MovieDetail: datax }
    }
  }

}


export default function MovieDetail({ MovieDetail }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [title, setTitle] = useState("");
  // const [imageZ, setImageZ] = useState("");
  const [AVmessage, setAVmessage] = useState("");
  // const [m3u8, setM3u8] = useState("");
  const [tag, setTag] = useState("");
  const [cat, setCat] = useState("");
  const [pub, setPub] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://13.215.173.193:5000/callback", {
        method: "POST",
        body: JSON.stringify({
          title: title || MovieDetail["list"][0].vod_title,
          imageZ: MovieDetail["list"][0].vod_pic,
          m3u8: MovieDetail["list"][0].vod_play_url,
          cat: MovieDetail["list"][0].type_name,
          pub: pub,
          tag: MovieDetail["list"][0].vod_play_from,
          AVmessage: AVmessage,
          vod_ID: MovieDetail["list"][0].vod_id
        }),
      });
      let resJson = await res.json();
      console.log(resJson)
      if (res.status === 200) {
        //     setTitle("");
        //     setImageZ("");
        //     setM3u8("");
        //     setAVmessage("");
        //     setPub("");
        //     setCat("");
        //     setTag("");
        setMessage("Post created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="popular-movies bg-zinc-900">
      <Head>
        <title>คลังAV {MovieDetail["list"][0].vod_name} ( {MovieDetail["list"][0].vod_time} ) - หนังAV คลิปหลุดไทย และ คลิปโซนเอเชีย ฟรีไม่มีโฆษณา เว็บเวอร์ชั่น ชัดเร็วแรง</title>
      </Head>

      <Header />
      <MovieInfo MovieDetail={MovieDetail} />
      <button
        className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]  md:mx-24"
        onClick={() => setShowPlayer(true)}
      >

        <div className="h-6 md:h-8 uppercase font-medium">
          POST {MovieDetail["list"][0].vod_name}
        </div>
      </button>
      <br />
      {showPlayer && (
        <div className="h-full w-full">
          <form className="min-h-screen movie-details md:mx-24" onSubmit={handleSubmit}>

            <div className="mb-6">
              <label htmlFor="title_input" className="block mb-2 text-sm font-medium text-white dark:text-white-300">ชื่อเรื่อง</label>
              <p className="block mb-2 text-sm font-medium text-white dark:text-white">{MovieDetail["list"][0].vod_name}</p>
              <input type="text" id="title_input" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className='grid gap-6 mb-6 lg:grid-cols-2'>
              <div>
                <label htmlFor="img_input" className="block mb-2 text-sm font-medium text-white dark:text-white">IMAGE</label>
                <input type="text" id="img_input" value={MovieDetail["list"][0].vod_pic} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
              </div>
              <div>
                <label htmlFor="m3u8_input" className="block mb-2 text-sm font-medium text-white dark:text-white">LINK M3U8</label>
                <input type="text" id="m3u8_input" value={MovieDetail["list"][0].vod_play_url} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
              </div>
            </div>
            {/* <div className='grid gap-6 mb-6 lg:grid-cols-2'>
              <div>
                <label htmlFor="tag_input" className="block mb-2 text-sm font-medium text-white dark:text-white">TAG</label>
                <p className="block mb-2 text-sm font-medium text-white dark:text-white">{MovieDetail["list"][0].vod_play_from}</p>
                <input type="text" id="tag_input" value={tag} onChange={(e) => setTag(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="cat_input" className="block mb-2 text-sm font-medium text-white dark:text-white">CATEGORY</label>
                <p className="block mb-2 text-sm font-medium text-white dark:text-white">{MovieDetail["list"][0].type_name}</p>
                <input type="text" id="cat_input" value={cat} onChange={(e) => setCat(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
            </div> */}
            <div className="mb-6">
              <label htmlFor="mde-input" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">รายละเอียดโพสต์</label>
              <input type="text" id="mde-input" value={AVmessage} onChange={(e) => setAVmessage(e.target.value)} className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value={"publish"} onChange={(e) => setPub(e.target.value)} className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-white dark:text-white">โพสต์ทันที (ถ้าไม่ติ๊กถูกจะส่งไปแบบฉบับร่าง)</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">โพสต์</button>
            <div className="message text-red-800">{message ? <h1>{message}</h1> : null}</div>
          </form>

        </div>
      )}
      <Footer />
    </div>
  )
}