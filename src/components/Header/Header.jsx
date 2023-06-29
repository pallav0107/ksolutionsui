import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import klogo from "../../images/logo.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import { Flex } from "reflexbox";
import MenuItem from "@material-ui/core/MenuItem";
import { MenuList, Popper, ClickAwayListener, Paper } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#12276E"
  },
  title: {
    flexGrow: 1
  },
  iconSize: {
    fontSize: "60px"
  },
  headerImage: {
    height: "40px",
    width: "100px",
    verticalAlign: "text-bottom",
    marginleft: "30px"
  },
  homeButton: props => ({
    padding: "5px",
    color: props.pathname.includes("home") || props.pathname === "" ? "white" : "lightgray",
    backgroundColor: "#12276E"
  }),
  serviceButton: props => ({
    padding: "5px",
    color: props.pathname.includes("services") ? "white" : "lightgray",
    backgroundColor: "#12276E"
  }),
  partnerButton: props => ({
    padding: "5px",
    color: props.pathname.includes("partner") ? "white" : "lightgray",
    backgroundColor: "#12276E"
  }),
  getQuotesButton: props => ({
    padding: "5px",
    color: props.pathname.includes("quotes") ? "white" : "lightgray",
    backgroundColor: "#12276E"
  }),
  tButtonStyle: {
    textTransform: "capitalize",
    fontSize: "large",
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  mButtonStyle: {
    textTransform: "capitalize",
    fontSize: "large"
  },
  header: {
    backgroundColor: "#12276E !important"
  }
}));
export default function Header() {
  const location = useLocation();
  const classes = useStyles({ pathname: location.pathname });
  const [openMenu, setOpenMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint as needed

  const openTheMenu = event => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  const menubutton = b => (
    <MenuItem key={b.label}>
      <Button className={b.className} href={b.href}>
        <div className="test">
          <Typography className={classes.mButtonStyle}>{b.label}</Typography>
        </div>
      </Button>
    </MenuItem>
  );

  const isCurrentPath = (currentPath, targetPath) => currentPath === targetPath;

  const buttonList = [
    { label: "Home", href: "/home", className: classes.homeButton },
    { label: "Services", href: "/services", className: classes.serviceButton },
    { label: "Capabilities", href: "/capabilities", className: classes.partnerButton },
    { label: "Get Quotes", href: "/quotes", className: classes.getQuotesButton }
  ];

  const toolbutton = b => (
    <Button
      key={b.label}
      color="inherit"
      className={isCurrentPath(location.pathname, b.href) ? b.className : ""}
      href={b.href}
    >
      <div className="test">
        <Typography className={classes.tButtonStyle}>{b.label}</Typography>
      </div>
    </Button>
  );

  if (isMobile) {
    return (
      <div className={classes.root}>
        <Flex className="Hamburger" flexDirection="row" justifyContent="space-between">
          <img src={klogo} className={classes.headerImage} href="/home" alt="" />
          <MenuIcon onClick={openTheMenu} className={classes.iconSize} />
          <Popper
            open={openMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            className="Hamburger"
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList style={{ backgroundColor: "#12276E" }}>
                  {buttonList.map(b => menubutton(b))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </Flex>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar className="Header" position="static">
        <Toolbar className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            <a href="/home">
              <img src={klogo} className={classes.headerImage} href="/home" alt="" />
            </a>
          </Typography>
          {buttonList.map(b => toolbutton(b))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
