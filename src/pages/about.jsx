import React from 'react'
import Footer from '../components/footer';

const About = () => {
  return (
    <div className='w-full bg-purple-200 h-[650px] ' >
        <div className='py-[70px]' >
            
        </div>

        <div className='w-[90%] md:flex m-auto  pb-[150px] ' >
        <div className='md:w-[50%]  ' >
            <h1 className='font-bold text-4xl mb-[10px] ' >About Us!</h1>
            <p className='text-2xl font-sans' > At DogConnect, we prioritize the well-being of our dogs,
                working exclusively with reputable breeders and shelters. 
                With a passion for quality care and customer satisfaction, 
                we're here to help you find a lifelong friend and ensure a smooth 
                transition for both you and your pet.

            Explore our wide selection of breeds, and let us help you discover your next best friend!</p>
        </div>

        <div className='md:w-[50%]  ' > 
            <img src="https://www.animalbehaviorcollege.com/wp-content/uploads/2018/03/give-dogs-choices-during-greetings.jpg" alt="" className="sm:w-[70%] w-[95%] h-[300px] m-auto rounded mt-[20px] " />
        </div>

    </div>

    <Footer />

    </div>
  )
}

export default About
