import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { getSession } from 'next-auth/react'
import { useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

import Header from '../components/Header'
import Hero from './../components/Hero';
import ImgSlide from '../components/ImgSlide';
import ImgSlick from './../components/ImgSlick';
import Brands from './../components/Brands';
import MoviesCollection from './../components/MoviesCollection';
import ShowsCollection from './../components/ShowsCollection';

function Home({
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}:any) {
  console.log("index movie:",popularMovies);

  const{data:session, status} = useSession();
  console.log("index session:",session);
  console.log("index status:",status);


  return (
    <div>
      <Head>
        <title>Disney+AUTH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ):(
        <main className='relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]'>
          <ImgSlide />
          <Brands />
          <MoviesCollection results={popularMovies} title="Popular Movies" />
          <ShowsCollection results={popularShows} title="Popular Shows" />
          <MoviesCollection results={top_ratedMovies} title="Top Rated Movies" />
          <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
        </main>
      )}
    </div>
  )
}

export default Home

export async function getServerSideProps(context:any) {
  const session = await getSession(context);
  const[
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`),
  ]);
  const [popularMovies, popularShows, top_ratedMovies, top_ratedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowsRes.json(),
      top_ratedMoviesRes.json(),
      top_ratedShowsRes.json(),
    ]);
  return {
    props: {
      session,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
