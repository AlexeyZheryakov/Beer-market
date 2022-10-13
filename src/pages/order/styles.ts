import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'App';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: theme.spacing(6),
  },
  breadcrumbs: {
    padding: theme.spacing(3),
  },
  buttonLink: {
    textDecoration: 'none',
  },
  gridItemLabel: {
    padding: '17px 0px 0px 0px',
  },
  gridItemLabelDate: {
    padding: '20px 0px 0px 0px',
  },
  gridHeight: {
    height: '70px',
  },
}));

export default useStyles;
