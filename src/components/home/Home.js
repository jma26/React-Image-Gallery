import { useState, useEffect } from 'react';
import getUnsplashPhotos from '../../unsplash/getUnsplashPhotos';
import Images from '../images/images';

function Home() {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const {
    getRandomPhotos
  } = getUnsplashPhotos();

  useEffect(() => {
    (async () => {
      let photos = await getRandomPhotos();
      setRandomPhotos(photos);
    })();
  }, [])

  return (
    <>
      <Images photos={randomPhotos} />
    </>
  );
}

export default Home;