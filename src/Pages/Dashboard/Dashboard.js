import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { ListGroup, Navbar, NavDropdown } from "react-bootstrap";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, Outlet} from "react-router-dom";
import SegmentIcon from '@mui/icons-material/Segment';
import useAuth from "../../hooks/useAuth";
import logo from './../../images/logo/fwfa-logo.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';


  

const drawerWidth = 220;

const sideMenu = {
  textDecoration:"none",
  marginTop:"10px",
  fontSize:"16px",
  fontWeight: "700",
}
function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const drawer = (
    <div>
      <div className="text-center py-1 mb-1">
        <Navbar.Brand as={Link} to="/" className=" fw-bold fs-2">
          <img src={logo} alt="" className='logo'/>
        </Navbar.Brand>
      </div>

      <Divider />
      <div className="text-center mt-3">
        <span><small>Welcome</small></span>
        <p className="fs-5 fw-bold">{user.displayName}</p>
      </div>
      <Divider />
      <ListGroup className="mt-3">
        <Link to="/dashboard" style={sideMenu}><ListGroup.Item > < DashboardIcon/> Dashboard</ListGroup.Item> </Link>
        <Link to={`/dashboard/addarticles`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Article</ListGroup.Item> </Link>
        <Link to={`/dashboard/addevents`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Events</ListGroup.Item> </Link>
        <Link to={`/dashboard/addprogram`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Program</ListGroup.Item> </Link>
        <Link to={`/dashboard/addcareer`} style={sideMenu}><ListGroup.Item> < AddIcon/> Add Career</ListGroup.Item> </Link>
        <Link to={`/dashboard/manageArticles`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Articles</ListGroup.Item> </Link>
        <Link to={`/dashboard/manageEvents`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Events</ListGroup.Item> </Link>
        <Link to={`/dashboard/managePrograms`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Program</ListGroup.Item> </Link>
        <Link to={`/dashboard/manageCareer`} style={sideMenu}><ListGroup.Item> < SegmentIcon/> Manage Career</ListGroup.Item> </Link>
        <Link to={`/dashboard/donatonList`} style={sideMenu}><ListGroup.Item> < ListAltIcon/> Donation List</ListGroup.Item> </Link>


        <NavDropdown title="User" id="basic-nav-dropdown" className=''>
            <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
        </NavDropdown>

        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
      </Menu>
       
        
        
        
        <Link to={`/home`} style={sideMenu}><ListGroup.Item onClick={logout}> < LogoutIcon/> Logout</ListGroup.Item> </Link>
    </ListGroup>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
        <AppBar position="fixed"
        sx={{  width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: { xs: "block", sm: "none" }, }}>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        
        <Outlet />
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;