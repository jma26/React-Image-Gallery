import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../header/Header';
import getUnsplashPhotos from '../../unsplash/getUnsplashPhotos';

function Home() {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const {
    getRandomPhotos
  } = getUnsplashPhotos();

  useEffect(() => {
    async function fetchPhotos() {
      let photos = await getRandomPhotos();
      setRandomPhotos(photos);
    }
    fetchPhotos();
  }, [])
  return (
    <>
    <Header />
    <Container maxWidth="md" className="home">

    </Container>
    </>
  );
}

export default Home;