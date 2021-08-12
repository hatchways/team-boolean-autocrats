import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardAction from '@material-ui/core/CardActions';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export default function ProfileCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography align="center" className={classes.title} variant="h4">
          Profile Photo
        </Typography>
        <Avatar alt="Profile Image" className={classes.avatar} src={`https://robohash.org/test.png`} />
        <Typography align="center" color="textSecondary">
          Be sure to use a photo that clearly shows your face
        </Typography>
        <CardAction>
          <Button color="secondary" variant="outlined">
            Upload a file from your device
          </Button>
          <Button startIcon={<DeleteForeverIcon />}>Delete Photo</Button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
