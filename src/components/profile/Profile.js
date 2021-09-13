import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getUnsplashPhotos from '../../unsplash/getUnsplashPhotos';
import Images from '../images/images';

function Profile() { 
  const [userPhotos, setPhotos] = useState([]);
  const {username} = useParams();
  const {
    getUserPhotos
  } = getUnsplashPhotos();

  useEffect(() => {
    (async () => {
      let userPhotos = await getUserPhotos({username});
      setPhotos(userPhotos);
    })();
  }, [])

  return (
    <>
      <Images photos={userPhotos} />
    </>
  )
}

export default Profile;