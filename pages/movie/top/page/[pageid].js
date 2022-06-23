import Footer from '../../../../components/Footer'
import Header from '../../../../components/Header'
import MovieDisplay from '../../../../components/MovieDisplay'
//import Script from 'next/script'

export async function getServerSideProps({ query }) {
  const { pageid } = query
  // Fetch data from external API
  //const apiKey = process.env.API_KEY
  const res = await fetch(
      `https://yed.moviefreex24.com/javmovie?host=7&page=${pageid}`
     // `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${pageid}`
  )
  const data = await res.json()
  if (res.ok) {
      return {
          props: { TopRatedPage: data.results }
      }
  }
}

export default function TopPage({ TopRatedPage }) {

  return (
    <div className="top-rated-movies bg-zinc-900">
      
      <Header />
      <MovieDisplay movie={TopRatedPage}/>
      <Footer />
    </div>
  )
}
