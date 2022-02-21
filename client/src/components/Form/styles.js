import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    width: '100%',
    maxWidth:'950px',
    padding: theme.spacing(0),
  },
  form: {

    flexWrap: 'wrap',
  },
  fileInput: {
    width: '100%',
    maxWidth:'400px',
    margin: '10px 0',
    height:'220px',
    border: '3.5px dashed #e1e1e1',
    borderRadius:'10px'
  },
  buttonSubmit: {
    marginBottom: 10,
    
  },
  btnClear: {
    width: '60px' ,
    backgroundColor:'#122' ,
  },
  uploadImg:{
    justifyContent: 'center',
    marginTop:'100px',
    display:'flex'
  },
  text_sty: {
    fontFamily:'Mukta' ,
    marginLeft:'10px'
  }
  
}));