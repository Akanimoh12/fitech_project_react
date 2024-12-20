export const fetchAllDogImages = async () => {
  try {
    const breedResponse = await fetch('https://dog.ceo/api/breeds/list/all');
    const breedData = await breedResponse.json();

    if (breedData.status === "success") {
      const breeds = breedData.message;

      // Flatten breeds into a list of strings
      const allBreeds = [];
      for (const [breed, subBreeds] of Object.entries(breeds)) {
        if (subBreeds.length > 0) {
          subBreeds.forEach((subBreed) => {
            allBreeds.push(`${breed}/${subBreed}`);
          });
        } else {
          allBreeds.push(breed);
        }
      }

      // Limited the list to 6 breeds
      const limitedBreeds = allBreeds.slice(0, 6);

      // Fetch random images for the limited breeds
      const breedImages = await Promise.all(
        limitedBreeds.map(async (breed) => {
          const imageResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
          const imageData = await imageResponse.json();
          return { breed, image: imageData.message };
        })
      );

      return breedImages; //
    }
  } catch (error) {
    console.error("Error fetching dog breeds or images:", error);
    return [];
  }
};
