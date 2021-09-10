import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../header/Header';
import getUnsplashPhotos from '../../unsplash/getUnsplashPhotos';
import Images from '../images/images';

const useStyles = makeStyles({
  root: {
    marginTop: '2em'
  }
});

function Home() {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const classes = useStyles();
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
    <Container maxWidth="lg" className="home">
      <Grid
        container
        direction="row"
        spacing={4}
        className={classes.root}
      >
        <Images randomPhotos={randomPhotos}/>
      </Grid>
    </Container>
    </>
  );
}

export default Home;