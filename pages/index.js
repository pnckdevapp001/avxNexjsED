import Footer from '../components/Footer'
import Header from '../components/Header'
import MovieDisplay from '../components/MovieDisplay'
// import Script from 'next/script'
import Head from 'next/head'
import Tipads from '../components/Tipads'

export async function getServerSideProps({ res }) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  // const apiKey = process.env.API_KEY
  const resx = await fetch(
      `https://yed.moviefreex24.com/javmovie?host=7`
      //`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  )
  const data = await resx.json()
  if (resx.ok) {
      return {
          props: { popularMovies: data.results }
      }
  }
}

export default function Home({ popularMovies }) {  
  return (
    <div className="popular-movies bg-zinc-900">
      
      <Head>
        <title>หนังAV คลังAV คลิปโซนเอเชีย ฟรีไม่มีโฆษณา เว็บเวอร์ชั่น ชัดเร็วแรง</title>
        <meta content='ดู หนังav คลังAV คลิปหลุดJAV เว็บเวอร์ชั่น ชัดเร็วแรง NextJs เผยแพร่สื่อ หนังAVเต็มเรื่อง จาก จีน ญี่ปุ่น เกาหลี คลิปหลุดของไทย คลิปลับJAV คลิปโซนเอเชีย ฟรีไม่มีโฆษณา' />
      </Head>
      <Header />
      <Tipads />
      <MovieDisplay movie={popularMovies}/>
      <Footer />
    </div>
  )
}
