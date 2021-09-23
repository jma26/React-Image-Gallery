import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './header.css';

import authStates from '../../firebase/authentication/authStates';
import userProfile from '../../firebase/user/userProfile';

const useStyles = makeStyles({
  root: {
    '& .header-middle .MuiIconButton-root': {
      marginLeft: '0.5em',
      marginRight: '0.5em'
    }
  }
});

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const open = Boolean(anchorEl);

  const {
    getUserProfile
  } = userProfile();

  const {
    authSignOut
  } = authStates();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    try {
      let isSignedOut = await authSignOut();
      if (isSignedOut) {
        console.log('Redirection to Login page');
        history.push('/login');
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  const getProfile = async () => {
    try {
      let user = await getUserProfile();
      history.push(`/${user.username}`, [
        user
      ])
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <AppBar className="header" position="static" color="transparent">
        <Toolbar className={classes.root}>
          <IconButton
            aria-label="Home page"
            color="inherit"
            onClick={() => history.push('/')}
          >
            <Typography variant="h6">
              Reactagram
            </Typography>
          </IconButton>
          <div className="header-end account">
            <IconButton aria-label="User messages" color="inherit">
              <MessageIcon />
            </IconButton>
            <IconButton
              aria-label="User account"
              color="inherit"
              aria-controls="profile-menu"
              onClick={handleMenu}
            >
              <AccountCircleIcon />
            </IconButton>
            <Popover
              id="profile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              keepMounted
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <MenuItem onClick={getProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;