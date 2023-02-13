import Image from 'next/image'
import React from 'react'
import { HomeIcon, MagnifyingGlassIcon, PlusIcon, StarIcon } from '@heroicons/react/24/solid';
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";

function Header() {
    const { data: session,status } = useSession();
    console.log("login session: ",session);
    console.log("login status: ",status);

    const router = useRouter();
    return (
        <header className='sticky bg-[#040714] flex h-[72px] top-0 z-[1000] items-center px-10 md:px-12'>
            <Image src="/images/logo.svg" width={80} height={80} className="cursor-pointer"
                onClick={() => router.push("/")}
            />
            {session && (
                <div className='hidden ml-10 cusmd:flex items-center space-x-6'>
                    <a className='header-link group'>
                        <HomeIcon className='h-4' />
                        <span className='span'>Home</span>
                    </a>
                    <a className='header-link group'>
                        <MagnifyingGlassIcon className='h-4' />
                        <span className='span'>Search</span>
                    </a>
                    <a className='header-link group'>
                        <PlusIcon className='h-4' />
                        <span className='span'>Watchlist</span>
                    </a>
                    <a className='header-link group'>
                        <StarIcon className='h-4' />
                        <span className='span'>Originals</span>
                    </a>
                    <a className='header-link group'>
                        <img src="/images/movie-icon.svg" alt='' className='h-5' />
                        <span className='span'>Movies</span>
                    </a>
                    <a className='header-link group'>
                        <img src="/images/series-icon.svg" alt='' className='h-5' />
                        <span className='span'>Series</span>
                    </a>
                </div>
            )}
            {!session ? (
                <button className='ml-auto uppercase border-2 px-2 py-1 rounded-xl text-sm font-medium tracking-wide hover:bg-white hover:text-black transition duration-200' onClick={signIn}>Login</button>
            ) : (
                <img src={session.user.image} alt="" className='ml-auto h-12 w-12 rounded-full object-cover cursor-pointer'
                    onClick={signOut}
                />
            )}
        </header>
    );
}

export default Header;
