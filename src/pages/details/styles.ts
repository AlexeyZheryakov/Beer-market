import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'App';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: theme.spacing(6),
  },
  breadcrumbs: {
    padding: theme.spacing(3),
  },
  img: {
    padding: theme.spacing(1),
    float: 'left',
    width: 'auto',
    height: 400,
    marginRight: theme.spacing(2),
  },
  flex: {
    display: 'flex',
  },
  buttonLink: {
    textDecoration: 'none',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: 800,
  },
  button: {
    backgroundColor: 'white',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
  },
  divTabs: {
    flexDirection: 'column',
    display: 'flex',
    flex: 2,
  },
  typography: {
    padding: theme.spacing(2.5),
    maxWidth: 600,
  },
  box: {
    textAlign: 'center',
  },
}));

export default useStyles;
