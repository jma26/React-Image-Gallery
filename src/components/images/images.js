import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '2px 8px 24px rgba(0, 0, 0, 0.15)',
    }
  },
  bold: {
    fontWeight: 'bold',
  },
  content: {
    '& a': {
      marginRight: '0.25em',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'initial'
    },
    '& a:hover, a:active, a:focus': {
      textDecoration: 'underline'
    }
  }
})

function Images(props) {
  const images = props.randomPhotos;
  const classes = useStyles();

  return (
    <>
      {
        images.map((image, i) => {
          return (
            <Grid
              key={i}
              item
              sm={4}
            >
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  image={`${image.urls.small}&fit=crop&min-w=300&min-h=600`}
                  title={image.alt_description}
                />
                <CardContent>
                   <Typography
                    variant="body1"
                    className={classes.bold}
                  >
                    {image.likes} likes
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.content}
                  >
                    <NavLink to={`/${image.user.username}`}>{image.user.username}</NavLink>
                    {image.alt_description}
                  </Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          )
        })
      }
    </>
  )
}

export default Images;