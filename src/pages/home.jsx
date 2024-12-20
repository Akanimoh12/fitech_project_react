import React from 'react'
import DogGallery from '../components/dogGallery'
import Footer from '../components/footer';

const home = () => {
  return (
    <div className='bg-purple-200' >
        <div className='h-[350px] w-[90%] m-[auto] py-[40px] ' >

            <p className='font-sans sm:text-8xl text-7xl font-bold mt-[70px] text-center ' > Pets <span className='text-red-400  '>Give</span> <br />
                True <span className='text-red-400 '>Love</span>
            </p>
            <p className='text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sed. <i class="fa-solid fa-pen"></i> </p>
        </div>

        <div>
            <p className='font-bold p-[12px] text-center bg-red-400 text-white mt-[20px] '> <i class="fa-solid fa-shop"></i> Make a Purchase today!!! </p>
        </div>
      <DogGallery />
      <div className='py-[15px]' ></div>
      <Footer />
    </div>
  )
}

export default home
