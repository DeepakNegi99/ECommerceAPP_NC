import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyle = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "#baecf9" },
};

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const NavBar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box display={"flex"} alignItems="center">
          <Typography component={NavLink} sx={navStyle} to="/" variant="h6">
            RE-STORE
          </Typography>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "orange" }} />}
          </IconButton>
        </Box>
       
          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyle}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
          
          <Box display={"flex"} alignItems="center">
          <IconButton size="large">
            <Badge>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} sx={navStyle} key={path}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
