import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router';

import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate  = useNavigate();
  const user = JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      navigate('/');
      window.location.reload(false);
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
   
     <div className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6" className={classes.text_sty}>{currentId ? `Editing "${post.title}"` : 'Create New Item'}</Typography>
        <Typography variant="p" style={{ color:'#666',fontSize:'13px',marginLeft:'10px'}}>Image, Video, Audio, or 3D Model</Typography>
        <div className={classes.fileInput}><div className={classes.uploadImg}><FileBase  type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div></div>
        <Typography variant="h6" className={classes.text_sty}>Name <span style={{color:'red'}}>*</span></Typography>
        <TextField  name="title" variant="outlined" label="Name" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <br/>
        <Typography variant="h6" className={classes.text_sty}>Description</Typography>
        <Typography variant="p" style={{ color:'#666',fontSize:'13px',marginLeft:'10px'}}>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</Typography>
        <TextField name="message" variant="outlined" label="Description" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <br/>
        <Typography variant="h6" className={classes.text_sty}>Tags</Typography>
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div style={{margin:'10px 10px'}}>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" style={{ backgroundColor: '#6495ED ' ,textTransform:'none',borderRadius:'15px'}} >Create</Button>
        </div>
       {/*  <Button variant="contained" color="secondary" size="large" onClick={clear} style={{ backgroundColor: '#DE3163 ' ,textTransform:'none'}} >Clear</Button> */}

      </form>
     </div>
   
  );
};

export default Form;