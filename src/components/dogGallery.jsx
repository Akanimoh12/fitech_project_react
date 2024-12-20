import React, { useState, useEffect } from 'react';
import { fetchAllDogImages } from './fetchDogs';
import Button from './button';

const DogGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      const dogData = await fetchAllDogImages();
      setDogs(dogData);
      setLoading(false);
    };

    fetchDogs();
  }, []);

  if (loading) {
    return <div className='text-center py-[200px] ' >...Please Hold, while Dogs loading...</div>;
  }

  return (
    <div>
      <h1 className='text-center mt-[20px] font-bold ' >- Choose your Favourite Available Dogs -</h1>
      <div className="flex flex-wrap justify-center " >
        {dogs.map(({ breed, image }, index) => (
          <div key={index} className='m-[10px] border-4 h-auto rounded-lg p-[8px] bg-white '>
             <img src={image} alt={breed} className='w-[300px] h-[300px] object-cover rounded-lg '/>
            <h3 className='py-[10px] font-bold '>Name: {breed}</h3>
            <Button /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogGallery;
