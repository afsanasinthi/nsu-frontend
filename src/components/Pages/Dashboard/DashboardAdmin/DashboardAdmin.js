import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../../../../hooks/useAuth';
// import Grid from '@mui/material/Grid/Grid';
// import Complaints from '../Complaints/Complaints';
// import Calender from '../Calender/Calender';
import {
    Outlet,
    Link
} from "react-router-dom";

// import MakeAdmin from '../MakeAdmin/MakeAdmin';
const drawerWidth = 240;

function DashboardAdmin(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <div className='d-flex flex-column'>
                <Link to="/home"><Button color="inherit">Home</Button></Link>
                <Link to='/dashboardAdmin/overview'><Button color="inherit">Overview</Button></Link>
                <Link to='/dashboardAdmin/ComplaintsList'><Button color="inherit">ComplaintsList</Button></Link>
                {/* <Link to="/studentHome"><Button color="inherit">Complain</Button></Link> */}
                {admin && <Box className='d-flex flex-column'>
                    <Link to='/dashboardAdmin/dashboardHome'><Button color="inherit">Complaints</Button></Link>

                    <Link to={`/dashboardAdmin/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    <Link to={`/dashboardAdmin/addReviewer`}><Button color="inherit">Add reviewer</Button></Link>
                </Box>}
                {/* <Link to="makeAdmin"><Button color="inherit">Make Admin</Button></Link>
                <Link to="addReviewer"><Button color="inherit">Add Reviewer</Button></Link> */}
            </div>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    // const [date, setdate] = React.useState(new Date());
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Outlet />


            </Box>
        </Box>
    );
}

DashboardAdmin.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardAdmin;
