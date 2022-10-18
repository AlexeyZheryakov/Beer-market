import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'gainsboro',
    marginTop: theme.spacing(6),
  },
  img: {
    float: 'left',
    width: 'auto',
    height: 200,
  },
  buttonLink: {
    textDecoration: 'none',
    position: 'relative',
  },
  breadcrumbs: {
    padding: theme.spacing(3),
  },
  span: {
    marginRight: theme.spacing(1),
  },
  iconButton: {
    position: 'relative',
  },
  cardActions: {
    marginLeft: theme.spacing(3),
  },
  cardContent: {
    marginLeft: theme.spacing(6),
  },
  div: {
    position: 'absolute',
    display: 'inline-block',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    background: '#ffeb3b',
    color: '#cddc39',
    textAlign: 'center',
    right: 25,
  },
}));

export default useStyles;
