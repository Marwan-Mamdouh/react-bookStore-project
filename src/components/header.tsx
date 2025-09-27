import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/store";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, type BaseSyntheticEvent } from "react";
import { blueGrey } from "@mui/material/colors";

const pages = ["movies", "favMovies"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const stringToColor = (string: string): string => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { favMovies } = useSelector((state: RootState) => state.favMovies);

  const handleOpenNavMenu = (event: BaseSyntheticEvent) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: BaseSyntheticEvent) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: blueGrey[800] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LiveTvIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",s
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Movie Store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", textDecoration: "none" }}
                    color="inherit"
                    component={Link}
                    to={page}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LiveTvIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Movie Store
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={`/${page}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box display={"flex"} sx={{ pr: "20px", alignItems: "center" }}>
            <Typography>{favMovies.length}</Typography>
            <IconButton component={Link} to={"/favMovies"}>
              <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={"Open Setting"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="user menu"
                  {...stringAvatar("Marwan AbdAlMagied")}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{ textAlign: "center", textDecoration: "none" }}
                    component={Link}
                    to={setting}
                    color="inherit"
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

/*
<nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">
      Portfolio
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="d-flex justify-content-between collapse navbar-collapse"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link active text-light"
            aria-current="page"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to={"/Movies"}>
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to={"/About"}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to={"/favMovie"}>
            favMovies
          </Link>
        </li>
      </ul>
      <div className="nav-item text-light">
        <span className="nav-item text-light">
          favorite movies count {favMovies.length}
        </span>
      </div>
    </div>
  </div>
</nav>
*/
