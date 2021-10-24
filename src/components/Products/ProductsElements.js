import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    maxWidth: '100%',
    flexGrow: 1,
   
  },
  media: {
   //height: 0,
    height: '300px',
    minWidth: '300px',
    maxWidth: '100%',
    paddingTop: '56.25%', //16:9
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  content: {
    flexGrow: 1,
    backgroundColor:"black",
    paddingBottom: "10px",
    overflowX: 'hidden',
  }

}));