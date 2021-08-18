import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import useStyles from './useStyles';

const Options = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List>
        <ListItem button disableGutters component={Link} to="/profile/options/edit-profile">
          <ListItemText primary="Edit Profile" className={classes.listItem} />
        </ListItem>
        <ListItem button disableGutters component={Link} to="/profile/options/profile-photo">
          <ListItemText primary="Profile Photo" className={classes.listItem} />
        </ListItem>
        <ListItem button disableGutters component={Link} to="/profile/options/availability">
          <ListItemText primary="Availability" className={classes.listItem} />
        </ListItem>
        <ListItem button disableGutters component={Link} to="/profile/options/payment">
          <ListItemText primary="Payment" className={classes.listItem} />
        </ListItem>
        <ListItem button disableGutters component={Link} to="/profile/options/security">
          <ListItemText primary="Security" className={classes.listItem} />
        </ListItem>
        <ListItem button disableGutters component={Link} to="/profile/options/settings">
          <ListItemText primary="Settings" className={classes.listItem} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Options;
