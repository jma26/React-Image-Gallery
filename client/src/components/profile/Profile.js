import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import getUnsplashPhotos from '../../unsplash/getUnsplashPhotos';
import LoadingDots from '../loading/LoadingDots';
import Images from '../images/Images';

function Profile() { 
  const [userPhotos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const {username} = useParams();
  const {
    getUserProfilePhotos
  } = getUnsplashPhotos();

  useEffect(() => {
    try {
      setLoading(true);
      (async () => {
        let user = await getUserProfilePhotos({username});
        setPhotos(user.userPhotos);
        setUser(user.userProfile);
        setLoading(false);
      })();
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  }, [])

  if (isLoading) return (
    <LoadingDots />
  ) 

  return (
    <>
      <ProfileHeader user={user} />
      <Images photos={userPhotos} />
    </>
  )
}

export default Profile;