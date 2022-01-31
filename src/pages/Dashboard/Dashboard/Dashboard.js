import { BookmarkRemoveTwoTone } from "@mui/icons-material";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import MiscellaneousServicesTwoToneIcon from "@mui/icons-material/MiscellaneousServicesTwoTone";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";
import RateReviewTwoToneIcon from "@mui/icons-material/RateReviewTwoTone";
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddReviews from "../../Reviews/AddReviews/AddReviews";
import AddPackages from "../AddPackages/AddPackages";
import AdminManagePackages from "../AdminManagePackages/AdminManagePackages.js/AdminManagePackages.js";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin.js";
import MyBookings from "../MyBookings/MyBookings";
import Payment from "../Payment/Payment";
import TotalBookings from "../TotalBookings/TotalBookings";

const drawerWidth = 300;

// main function starts here
function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, logOut, user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Paper
        elevation="0"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Avatar sx={{ width: "100px", height: "100px" }}>
          <img src={user?.photoURL} alt="" srcset="" />
        </Avatar>
        <Typography variant="h6" color="secondary">
          {user.displayName}
        </Typography>
      </Paper>
      <Toolbar />
      <Divider />

      {/* Go back to home page  */}
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
          <HomeTwoToneIcon />
          <Button color="secondary">Home</Button>
        </Button>
      </Link>

      {/* Nesting area  */}
      {!admin && (
        <Box>
          <Link to={`${url}`} style={{ textDecoration: "none" }}></Link>

          <Link to={`${url}/payment`} style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <PaymentTwoToneIcon />
              <Button color="secondary">Payment</Button>
            </Button>
          </Link>

          <Link to={`${url}/myBookings`} style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <BookmarkRemoveTwoTone />
              <Button color="secondary">My Bookings</Button>
            </Button>
          </Link>

          <Link to={`${url}/addReviews`} style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <RateReviewTwoToneIcon />
              <Button color="secondary">Give Reviews</Button>
            </Button>
          </Link>

          <Button
            onClick={logOut}
            variant="contained"
            sx={{ mt: "400px" }}
            color="secondary"
          >
            <ExitToAppTwoToneIcon />
            logout
          </Button>
        </Box>
      )}
      {admin && (
        <Box>
          <Link to={`${url}`} style={{ textDecoration: "none" }}></Link>

          <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <AdminPanelSettingsTwoToneIcon />
              <Button color="secondary">Make Admin</Button>
            </Button>
          </Link>

          <Link to={`${url}/addPackages`} style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <MiscellaneousServicesTwoToneIcon />
              <Button color="secondary">Add Packages</Button>
            </Button>
          </Link>

          <Link
            to={`${url}/adminManagePackages`}
            style={{ textDecoration: "none" }}
          >
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <ManageAccountsTwoToneIcon />
              <Button color="secondary">Manage All Packages</Button>
            </Button>
          </Link>

          <Link to={`${url}/totalBookings`} style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <TableChartTwoToneIcon />
              <Button color="secondary">Total Bookings</Button>
            </Button>
          </Link>

          <Button
            onClick={logOut}
            variant="contained"
            color="secondary"
            sx={{ mt: "400px" }}
          >
            <ExitToAppTwoToneIcon />
            logout
          </Button>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap component="div" color="secondary">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Dashboard Routing  */}
        <Switch>
          <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>

          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>

          <Route path={`${path}/myBookings`}>
            <MyBookings></MyBookings>
          </Route>
          <Route path={`${path}/addReviews`}>
            <AddReviews></AddReviews>
          </Route>

          {/* Admin Route  */}
          <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute path={`${path}/addPackages`}>
            <AddPackages></AddPackages>
          </AdminRoute>

          <AdminRoute path={`${path}/adminManagePackages`}>
            <AdminManagePackages></AdminManagePackages>
          </AdminRoute>

          <AdminRoute path={`${path}/totalBookings`}>
            <TotalBookings></TotalBookings>
          </AdminRoute>
        </Switch>
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
