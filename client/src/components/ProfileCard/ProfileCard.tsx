import { Avatar, Box, Button, Paper } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

export default function ProfileCard(): JSX.Element {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={4}>
      <Box className={classes.box}>
        <Typography align="center" className={classes.title} variant="h4">
          Profile Photo
        </Typography>
        <Avatar alt="Profile Image" className={classes.avatar} src={`https://robohash.org/test.png`} />
        <Typography className={classes.secondaryText} color="textSecondary">
          Be sure to use a photo that clearly shows your face
        </Typography>
        <Button className={classes.uploadBtn} variant="outlined">
          Upload a file from your device
        </Button>
        <Button className={classes.deleteBtn} startIcon={<DeleteForeverIcon />}>
          Delete Photo
        </Button>
      </Box>
    </Paper>
  );
}
