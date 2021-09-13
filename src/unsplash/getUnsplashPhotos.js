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

  const getUserPhotos = async function(username) {
    try {
      let unsplashPhotos = await unsplash.users.getPhotos(username);
      let userPhotos = unsplashPhotos.response.results;
      return userPhotos;
    } catch (err) {
      return err;
    }
  }

  return {
    getRandomPhotos,
    getUserPhotos
  }
}