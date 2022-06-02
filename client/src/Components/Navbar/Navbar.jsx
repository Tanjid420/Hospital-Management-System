import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DrawerNav from "./DrawerNav";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#184e77" }}>
        <Toolbar>
          <BloodtypeIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                A&S Hospital
              </Typography>
              <DrawerNav />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  <Tab label="Home" value={0} className={styles.hoverButton} />
                </Link>
                <Link
                  to="/services"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Tab
                    label="Services"
                    value={1}
                    className={styles.hoverButton}
                  />
                </Link>

                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Tab
                    label="About Us"
                    value={2}
                    className={styles.hoverButton}
                  />
                </Link>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Tab
                    label="Contact"
                    value={3}
                    className={styles.hoverButton}
                  />
                </Link>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
