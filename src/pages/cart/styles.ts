import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'App';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'gainsboro',
    marginTop: theme.spacing(6),
  },
  img: {
    padding: theme.spacing(1),
    float: 'left',
    width: 'auto',
    height: 200,
    marginRight: theme.spacing(2),
  },
  textField: {
    width: '60%',
    marginRight: theme.spacing(1),
  },
  gridContainer: {
    marginTop: theme.spacing(1),
  },
  form: {
    backgroundColor: 'gainsboro',
    marginTop: theme.spacing(2.5),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  icons: {
    fontSize: 40,
  },
  buttonLink: {
    textDecoration: 'none',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  breadcrumbs: {
    padding: theme.spacing(3),
  },
  button: {
    backgroundColor: 'white',
  },
}));

export default useStyles;
