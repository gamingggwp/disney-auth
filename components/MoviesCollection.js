import React from 'react'
import MoviesThumbnail from './MoviesThumbnail';

function MoviesCollection({ results, title }) {
    return (
        <div className='relative flex flex-col space-y-2 my-10 px-8 max-w-[1440px] mx-auto'>
            <h2 className='font-semibold'>{title}</h2>
            <div className='flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2 max-h-[230px]'>
                {results.map((result) => (
                    <MoviesThumbnail key={result.id} result={result} />
                ))}
            </div>
        </div>
    )
}

export default MoviesCollection