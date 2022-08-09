import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import react, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./AvailableBeds.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const AvailableBeds = () => {
  const [availableseats, setAvailableSeats] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get("http://localhost:4000/availableseats");
      setAvailableSeats(res.data);
      console.log(res.data);
    };
    getData();
  }, []);
  //Context Menu
  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };
  //Context Menu
  return (
    <react.Fragment>
      <Navbar2 />
      <main>
        <h1>Available Beds</h1>
        {/* <ul className={styles.ul}>
                {availableseats.map(seats=>(
                    <li className={styles.lists}></li>
                )

                )}
            </ul> */}
        <div className={styles.container}>
          <div className={styles.tests}>
            {availableseats.map((seats) => (
              <div className={styles.div2}>
                <div
                  className={styles.blood}
                  onContextMenu={handleContextMenu}
                  style={{ cursor: "context-menu" }}
                >
                  <h4>
                    <p>
                      BuildingName-{seats.BuildingName}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RoomNo-
                      {seats.RoomNo}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BedNo-
                      {seats.BedNo}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price-
                      {seats.Price}
                    </p>
                  </h4>
                  <Menu
                    open={contextMenu !== null}
                    onClose={handleClose}
                    anchorReference="anchorPosition"
                    anchorPosition={
                      contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                    }
                  >
                    <MenuItem onClick={handleClose}>Occupy</MenuItem>
                  </Menu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </react.Fragment>
  );
};
export default AvailableBeds;
