import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'App';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: theme.spacing(4.5),
  },
  img: {
    padding: theme.spacing(1),
    float: 'left',
    width: 'auto',
    height: 300,
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
  description: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'pre-line',
    width: 'auto',
    height: 260,
  },
  cardHeder: {
    height: 64,
  },
  box: {
    textAlign: 'center',
  },
}));

export default useStyles;
