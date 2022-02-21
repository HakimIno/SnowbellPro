import React, { useState ,useEffect } from "react";
import { Link ,useNavigate ,useLocation} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { AppBar, Typography, Avatar, Toolbar, Button} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import  Menu from "@mui/material/Menu";
import  MenuItem  from "@mui/material/MenuItem";
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import memories from "../../images/sssss750.png";
import useStyles from "./styles";
import decode from 'jwt-decode';


const Navbar = () => {
  const classes = useStyles();
  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const location = useLocation();
  const [anchorEl , setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    navigate('/');
    window.location.reload(false);
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


  return (
      
      <AppBar className={classes.appBar} color="inherit" >

      <div className={classes.brandContainer}>
        <img className={classes.image} src={memories} alt="icon" height="45" />
        <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">Snowbell</Typography>
      </div>
      <div >
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
           <div className={classes.profile}>
              <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar 
            className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl} >{user?.result.name.charAt(0)}</Avatar>
          </IconButton>
            
            <Menu 
           anchorEl={anchorEl}
           id="account-menu"
           open={open}
           onClose={handleClose}
           onClick={handleClose}
           PaperProps={{
             elevation: 0,
             sx: {
               overflow: 'visible',
               filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
               mt: 1.5,
               '& .MuiAvatar-root': {
                 width: 32,
                 height: 32,
                 ml: -0.5,
                 mr: 1,
               },
               '&:before': {
                 content: '""',
                 display: 'block',
                 position: 'absolute',
                 top: 0,
                 right: 14,
                 width: 10,
                 height: 10,
                 bgcolor: 'background.paper',
                 transform: 'translateY(-50%) rotate(45deg)',
                 zIndex: 0,
               },
             },
           }}
           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
           
            >
          <MenuItem component={Link} to="/profile">
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/create">
          <ListItemIcon>
            <CreateIcon fontSize="small" />
          </ListItemIcon>
          Create
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem  onClick={logout} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
            </Menu>
          </div> 
        ) : (
            <Button component={Link} to="/auth" variant="outlined" color="primary" style={{marginRight:'-40px' ,width:'fit-content',fontSize:'12px' , borderRadius:10}}>sing in</Button>
        )}
      </Toolbar>
      </div>
  
    </AppBar>

  );
};

export default Navbar;
