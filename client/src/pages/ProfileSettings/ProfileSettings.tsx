import { Container, Grid, Link } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useState } from 'react';
import Availability from './../../components/ProfileSettings/Availability/Availability';
import EditProfile from './../../components/ProfileSettings/EditProfile/EditProfile';
import Payment from './../../components/ProfileSettings/Payment/Payment';
import ProfilePhoto from './../../components/ProfileSettings/ProfilePhoto/ProfilePhoto';
import Security from './../../components/ProfileSettings/Security/Security';
import Settings from './../../components/ProfileSettings/Settings/Settings';
import useStyles from './useStyles';

export default function ProfileSettings(props: any): JSX.Element {
  const Options = ['Edit Profile', 'Profile Photo', 'Availability', 'Payment', 'Security', 'Settings'];

  const classes = useStyles();

  const [currentSection, setCurrentSection] = useState(props.match.params.options);

  const handleClick = (section: string) => {
    setCurrentSection(section);
    props.history.push(`/profile/${section}`);
  };

  return (
    <Grid container className={`${classes.root}`}>
      <CssBaseline />
      <Grid className={`${classes.optionItems}`}>
        {Options.map((item) => (
          <Link
            onClick={() => handleClick(item.replace(/\s/g, '').toLowerCase())}
            className={`${classes.optionItem} ${
              currentSection === item.replace(/\s/g, '').toLowerCase() && classes.selectedOptionItem
            }`}
            underline="none"
            key={item}
          >
            {item}
          </Link>
        ))}
      </Grid>
      <Container maxWidth="sm" className={classes.menuContainer}>
        {currentSection === 'editprofile' && <EditProfile />}
        {currentSection === 'profilephoto' && <ProfilePhoto />}
        {currentSection === 'availability' && <Availability />}
        {currentSection === 'payment' && <Payment />}
        {currentSection === 'security' && <Security />}
        {currentSection === 'settings' && <Settings />}
      </Container>
    </Grid>
  );
}
