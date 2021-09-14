import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import './loading.css';

const useStyles = makeStyles({
  gridItem: {
    width: '100%',
    textAlign: 'center'
  },
  loading: {
    fontSize: '2em',
  }
})

function LoadingDots() {
  const classes = useStyles();
  return (
    <>
      <Grid
        item
        className={classes.gridItem}
      >
        <Typography variant="p" className={`${classes.loading} loading`}>Loading</Typography>
      </Grid>
    </>
  )
}

export default LoadingDots;