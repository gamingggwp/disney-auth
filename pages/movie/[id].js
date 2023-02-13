import Head from 'next/head';
import Header from './../../components/Header';
import { getSession } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Hero from './../../components/Hero';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';

function Movie({ result }) {
    console.log(result);
    const { data: session } = useSession();
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const [showPlayer, setShowPlayer] = useState(false);

    useEffect(() => {
        if(!session) {
            router.push("/");
        }
    }, []);

    const index = result.videos.results.findIndex(
        (element) => element.type === "Trailer"
    );
    const router = useRouter();


    return (
        <div>
            <Head>
                <title>{result.title || result.original_name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {!session ? <Hero /> : (
                <session>
                    <div className='relative min-h-[calc(100vh-72px)]'>
                        <Image
                            src={
                                `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
                            }
                            fill
                            style={{ objectFit: "cover", objectPosition: "50% 30%" }}
                        />
                    </div>
                    <div className='absolute inset-y-36 cusmd:inset-y-auto cusmd:bottom-10 inset-x-4 cusmd:inset-x-12 space-y-6 z-50'>
                        {/* rounded items-center justify-center w-min cursor-pointer bg-[#4f2d06]/30 */}
                        <div className=''>
                            <h1 className='text-3xl sm:text-4xl cusmd:text-5xl font-bold whitespace-nowrap m-2'>
                                {result.title || result.original_name}
                            </h1>
                        </div>
                        <div className='flex items-center space-x-2 cusmd:space-x-3'>
                            <button className='text-xs cusmd:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-1.5 px-4 rounded hover:bg-[#c6c6c6]'>
                                <img src="/images/play-icon-black.png" alt='' className='h-6 cusmd:h-8' />
                                <span className='uppercase font-medium tracking-wide'>Play</span>
                            </button>
                            <button className='text-xs cusmd:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-1.5 px-4 rounded hover:bg-[#c6c6c6] hover:text-black/80'
                                onClick={() => setShowPlayer(true)}
                            >
                                <img src="/images/play-icon-white.png" alt='' className='h-6 cusmd:h-8' />
                                <span className='uppercase font-medium tracking-wide'>Trailer</span>
                            </button>
                            <div className='rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60'>
                                <PlusIcon className='h-6' />
                            </div>
                            <div className='rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60'>
                                <img src='/images/group-icon.png' alt='' />
                            </div>
                        </div>
                        <p className='text-xs cusmd:text-sm'>
                            {result.release_date || result.first_air_date} ・ {" "}
                            {Math.floor(result.runtime / 60)}h {result.runtime % 60}m ・ {" "}
                            {result.genres.map((genre) => genre.name + " ")}
                            {" "}
                        </p>
                        <h4 className='text-sm cusmd:text-lg max-w-4xl'>{result.overview}</h4>
                    </div>
                    {/* BG Overlay */}
                    {showPlayer && (
                        <div className='absolute inset-0 bg-black opacity-50 h-full w-full z-50' />
                    )}
                    <div
                        className={`absolute top-[100px] inset-x-[7%] cusmd:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${showPlayer ? "opacity-100 z-50" : "opacity-0"
                            }`}
                    >
                        <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
                            <span className='font-semibold'>Play Trailer</span>
                            <div
                                className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]'
                                onClick={()=> setShowPlayer(false)}
                            >
                                <XMarkIcon className='h-5' />
                                {/* <XIcon/> */}
                            </div>
                        </div>
                        <div className='relative pt-[55%] cusmd:pt-[40%]'>
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                                width="100%"
                                height="100%"
                                style={{position: "absolute", top: "0", left: "0"}}
                                controls={true}
                                playing={showPlayer}
                            />
                        </div>
                    </div>
                </session>
            )}
        </div>
    );
}

export default Movie

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const { id } = context.query;
    // const id = context.query.id;

    const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then((response) => response.json()
    );
    return {
        props: {
            session,
            result: request,
        },
    };
}