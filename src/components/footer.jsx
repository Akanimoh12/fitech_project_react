import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full h-[100px] text-white flex justify-center gap-4 py-[7px] ' > 
      <div className="gap-2 flex text-xl " >
      <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
      <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
      <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i></a>
      <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
      </div>
      <div className='flex justify-center text-xl' >
        <a href="http://" target="_blank" rel="noopener noreferrer">Copyright@Akanimoh</a> 
      </div>
    </div>
  )
}

export default Footer
