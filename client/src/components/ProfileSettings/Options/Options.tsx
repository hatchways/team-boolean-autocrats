import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileType } from '../../../interface/Profile';
import useStyles from './useStyles';

const Options = (): JSX.Element => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // TEST START
  // This will be removed once integration is applied
  // This is only here to test if availability will render when a user is a type === 'Sitter'
  const testType = 'Sitter';
  // TEST END

  const handleListItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
  };
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
        <ListItem
          button
          disableGutters
          selected={selectedIndex === 0}
          onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 0)}
          component={Link}
          to="/profile/options/edit-profile"
        >
          <ListItemText primary="Edit Profile" className={classes.listItem} />
        </ListItem>
        <ListItem
          button
          disableGutters
          selected={selectedIndex === 1}
          onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 1)}
          component={Link}
          to="/profile/options/profile-photo"
        >
          <ListItemText primary="Profile Photo" className={classes.listItem} />
        </ListItem>
        {testType === ProfileType.Sitter && ( // TODO: This condition will be modified accordingly once integration is applied
          <ListItem
            button
            disableGutters
            selected={selectedIndex === 2}
            onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 2)}
            component={Link}
            to="/profile/options/availability"
          >
            <ListItemText primary="Availability" className={classes.listItem} />
          </ListItem>
        )}
        <ListItem
          button
          disableGutters
          selected={selectedIndex === 3}
          onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 3)}
          component={Link}
          to="/profile/options/payment"
        >
          <ListItemText primary="Payment" className={classes.listItem} />
        </ListItem>
        <ListItem
          button
          disableGutters
          selected={selectedIndex === 4}
          onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 4)}
          component={Link}
          to="/profile/options/security"
        >
          <ListItemText primary="Security" className={classes.listItem} />
        </ListItem>
        <ListItem
          button
          disableGutters
          selected={selectedIndex === 5}
          onClick={(event: React.MouseEvent<HTMLElement>) => handleListItemClick(event, 5)}
          component={Link}
          to="/profile/options/settings"
        >
          <ListItemText primary="Settings" className={classes.listItem} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Options;
