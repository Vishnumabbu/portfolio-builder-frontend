import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import styles from "./Header.module.scss";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  // TODO: Change the below placeholder
  placeholder: string;
}

export default function Header(props: Props) {
  console.log(props);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      {/* <Toolbar />
      <Divider /> */}
      <List>
        {["Home", "About Us", "Send email"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Login"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: "none" }}>
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
          {/* <img src={logo} style={{ height: "2rem" }} /> */}
          <Typography variant="h6" noWrap component="div" className="!ml-2">
            Portfoliostore
          </Typography>
          <Box
            className="!ml-auto"
            sx={{ mr: 10, display: { xs: "none", sm: "block" } }}
          >
            <Button className="!text-white !mr-5">Home</Button>
            <Button className="!text-white !mr-5">About Us</Button>
            <Button className="!text-white !mr-5">Send email</Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button className="!text-white !mr-10">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        className={styles.headerContent}
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignContent: "center",
          p: 3,
        }}
      >
        <Toolbar />
        <div className={styles.textOverlay}>
          <Typography variant="h1" sx={{ marginBottom: 2, color: "white" }}>
            Create Your Portfolio
          </Typography>
          <Typography
            style={{ color: "white" }}
            sx={{ marginBottom: 2, color: "white" }}
          >
            Portfoliostore is the best website builder for creatives. Make your
            your own portfolio now.
          </Typography>
          <Button style={{ color: "white" }}> Get Started</Button>
        </div>
      </Box>
    </Box>
  );
}
