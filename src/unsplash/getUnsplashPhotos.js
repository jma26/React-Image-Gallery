import { unsplash } from './unsplash';

export default function getUnsplashPhotos() {
  
  const getRandomPhotos = async function() {
    try {
      let unsplashPhotos = await unsplash.photos.getRandom({count: 30});
      let randomPhotos = unsplashPhotos.response;
      return randomPhotos;
    } catch (err) {
      return err;
    }
  }

  return {
    getRandomPhotos
  }
}