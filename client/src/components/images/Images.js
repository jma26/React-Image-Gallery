import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  card: {
    cursor: 'pointer',
    transition: 'box-shadow 0.2s',
    '&:hover': {
      boxShadow: '2px 8px 24px rgba(0, 0, 0, 0.15)',
    },
    '& .MuiCardActions-root': {
      padding: '0'
    },
    '& .CardTopContainer': {
      position: 'relative'
    },
    '& .overlay-likes': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      opacity: '0',
      transition: 'opacity 0.2s, background 0.2s'
    },
    '&:hover .overlay-likes': {
      background: 'rgba(0, 0, 0.5)',
      opacity: '0.75',
    },
    '&:hover .likes--int, &:hover .likes--icon': {
      transition: 'opacity 0.2s',
      opacity : '1'
    },
    '& .likes--container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    '& .likes--int, & .likes--icon': {
      color: '#FFF',
      opacity: '0',
      transition: 'opacity 0.2s',
    },
    '& .likes--icon': {
      marginRight: '0.5em'
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
  },
  modal: {
    '& .MuiCard-root': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    '& .MuiCardMedia-img': {
      objectFit: 'contain'
    }
  }
})

function Images(props) {
  const [modal, setModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const images = props.photos;
  const classes = useStyles();

  const toggleModal = (image) => {
    setModal(image);
    setModalOpen(!modalOpen);
  }

  return (
    <>
      {
        images.map((image, index) => {
          return (
            <Grid
              key={index}
              item
              sm={4}
            >
              <Card className={classes.card}>
                <div className="CardTopContainer">
                  <CardActions
                    onClick={() => toggleModal(image)}
                    disableSpacing
                  >
                    <CardMedia
                      component="img"
                      image={`${image.urls.small}&fit=crop&min-w=300&min-h=600`}
                      title={image.alt_description}
                    />
                    <div className="overlay-likes">
                      <div className="likes--container">
                        <FavoriteIcon style={{fill: 'white'}} className="likes--icon" />
                        <Typography variant="body1" className="likes--int">{image.likes}</Typography>
                      </div>
                    </div>
                  </CardActions>
                </div>
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
      {
        modalOpen ? <Modal
          open={modalOpen}
          onClose={toggleModal}
          className={classes.modal}
        >
          <Card>
            <CardMedia
              component="img"
              image={`${modal.urls.regular}`}
              title={modal.alt_description}
            />
          </Card>
        </Modal> : null
      }
    </>
  )
}

export default Images;