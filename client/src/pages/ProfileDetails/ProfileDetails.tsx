import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

export default function ProfileDetails(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="flex-start" component="div" spacing={10}>
      <Grid item className={classes.sitterProfileCard}>
        Sitter Profile Card
      </Grid>
      <Grid item className={classes.bookSitterCard}>
        Book Sitter Card
      </Grid>
    </Grid>
  );
}
