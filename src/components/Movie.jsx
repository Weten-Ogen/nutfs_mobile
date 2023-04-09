import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa';


const Movie = ({item,like,handleLike}) => {
  
  return (
    <div>
       <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
            <img 
            src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} 
            alt={item?.title}
            />
            <div 
            className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p 
                className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                  {item?.title}
                </p>
                <p 
                onClick={()=> handleLike()}>
                  {
                  like ? 
                  <FaHeart 
                  className='absolute top-4 left-4 text-red-700 '/> : 
                  <FaRegHeart 
                
                  className='absolute top-4 left-4  overflow-hidden text-red-700 '/>
                  }
                </p>
            </div>
        </div>
    </div>
  )
}

export default Movie
