import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="Header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Reactagram
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;