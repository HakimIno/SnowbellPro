import  React , { useState, useEffect }from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 


  return (
    <div>
      <Button style={{ color: '#111' }} size="small" onClick={handleClickOpen}><MoreHorizIcon fontSize="default" /></Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={ Transition }
      >
        <AppBar sx={{ position: 'relative' }} style={{backgroundColor:'#283747 '}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              From
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
      </Dialog>
    </div>
  );
}
