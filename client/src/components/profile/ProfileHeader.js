import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  profileHeader: {
    display: 'flex',
    '& .MuiCardMedia-img': {
      maxWidth: '168px',
      maxHeight: '168px',
      borderRadius: '50%',
      margin: '0 auto',
      padding: '2em 0'
    }
  },
  profileInfo: {
    flexGrow: '1',
    paddingTop: '2em',
    paddingBottom: '2em',
    '& span': {
      fontWeight: 'bold'
    }
  },
  profileTopContainer: {
    display: 'flex',
    '& p': {
      marginRight: '1em',
      marginTop: '0.5em'
    }
  },
  profileBottomContainer: {
    marginTop: '1em'
  }
})

function ProfileHeader(props) {
  const {
    user
  } = props;
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        sm={12}
      >
        <Card className={classes.profileHeader}>
          <Grid
            item
            sm={4}
          >
            <CardMedia
              component="img"
              image={user.profile_image.large}
              title={`${user.username} profile image`}
            />
          </Grid>
          <Grid
            item
            sm={8}
          >
            <CardContent className={classes.profileInfo}>
              <Typography variant="h4">{user.username}</Typography>
              <Box component="div" className={classes.profileTopContainer}>
                <Typography variant="body2"><span>{user.total_photos}</span> posts</Typography>
                <Typography variant="body2"><span>{user.followers_count}</span> followers</Typography>
                <Typography variant="body2"><span>{user.following_count}</span> following</Typography>
              </Box>
              <Box component="div" className={classes.profileBottomContainer}>
                <Typography variant="body2">{user.bio}</Typography>
              </Box>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </>
  )
}

export default ProfileHeader;