import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: {
        
        minHeight: 56,
        [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
          minHeight: 48,
        },
        [theme.breakpoints.up('sm')]: {
          minHeight: 64,
        },
 
    },
    title: {
      marginTop: '5%',
    },
    emptyButton: {
      minWidth: '150px',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '5px',
      },
      [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
      },
    },
    checkoutButton: {
      minWidth: '150px',
      
    },
    link: {
      textDecoration: 'none',
    },
    cardDetails: {
      display: 'flex',
      marginTop: '10%',
      width: '100%',
      justifyContent: 'space-between',
      
    },
  }));