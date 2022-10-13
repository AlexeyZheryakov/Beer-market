import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'App';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  div: {
    paddingRight: theme.spacing(3),
  },
  gridMenu: {
    marginTop: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

export default useStyles;
