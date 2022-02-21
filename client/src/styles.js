import { makeStyles } from "@material-ui/core/styles";

export default makeStyles (() => ({
    appBar: {
        margin: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '10px'
        
    },
    heading: {
        color: '#000',
        lineHeight:'2.3',
        fontSize: '24px',
        fontFamily: 'Poppins sans serif'
    },
    image: {
        marginLeft: '16px',
    }
}));