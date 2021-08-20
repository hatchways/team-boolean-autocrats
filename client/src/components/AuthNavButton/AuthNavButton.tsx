import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  btnText: string;
  variant: any;
}

const AuthNavButton = ({ linkTo, btnText, variant }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.authHeader}>
      <Button className={classes.accBtn} component={Link} to={linkTo} color="secondary" variant={variant}>
        {btnText}
      </Button>
    </Box>
  );
};

export default AuthNavButton;
