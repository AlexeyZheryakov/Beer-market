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
    width: 100,
    height: 'auto',
    marginRight: theme.spacing(2),
  },
  buttonLink: {
    textDecoration: 'none',
  },
  breadcrumbs: {
    padding: theme.spacing(3),
  },
}));

export default useStyles;
