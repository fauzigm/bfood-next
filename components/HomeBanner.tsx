import React from 'react'
import Title from './Title';

const HomeBanner = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
        <Title className='text-3xl md:text-4xl uppercase font-bold text-center'>Simple Food Great Taste</Title>
        <p className='text-sm text-center text-lightColor/80 font-medium max-w-[480px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta labore quas dicta fugiat id libero minus sapiente, amet corrupti molestiae sed consequatur dolor sequi nesciunt incidunt.</p>
    </div>
  )
}

export default HomeBanner;