import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: '#000',
    fontSize: '1.8rem',
    textDecoration: 'none',
    fontFamily: 'Mukta'
  }, 
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '50px',

    
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width:'400px',

  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    objectFit: 'cover'
    
  },
}));