import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
const NavBar = () => {
    return (
        <div>
                        <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="nav-title" >
                        Audit Ready
                    </Typography>
                     <div >

                        <IconButton color="inherit">
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircleIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            {/* <SettingsApplicationsIcon /> */}
                            </IconButton>
                        
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;