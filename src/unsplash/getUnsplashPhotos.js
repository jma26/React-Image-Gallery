import { FunctionsTwoTone } from '@material-ui/icons';
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

  const getUserProfilePhotos = async function(username) {
    try {
      let userPhotos = await unsplash.users.getPhotos(username);
      let userProfile = await unsplash.users.get(username);
      console.log(userProfile);
      return {
        userPhotos: userPhotos.response.results,
        userProfile: userProfile.response
      }
    } catch (err) {
      return err;
    }
  }

  return {
    getRandomPhotos,
    getUserProfilePhotos
  }
}