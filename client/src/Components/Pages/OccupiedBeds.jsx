
import Footer from "../Footer/Footer";
import Navbar2 from "../Navbar/Navbar2";
import react, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./OccupiedBeds.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const OccupiedBeds=()=>{
    const [occupiedBeds, setOccupiedBeds] = useState([]);
  const [contextMenu, setContextMenu] = useState(null);
  let [seatId,setId]=useState("")
  useEffect(()=>{
    const getData=async()=>{
        const res=await Axios.get("http://localhost:4000/reservedbeds")
        setOccupiedBeds(res.data);
        console.log(res.data);
    }
    getData();

  },[])
  const handleClose = () => {
    setContextMenu(null);
  };
  const unoccupyBed=async(ID)=>{
    console.log(ID.seatId)
   
    const res = await Axios.post("http://localhost:4000/unoccupybeds",{id:ID.seatId});
    
    handleClose();
    
    
  }
  const handleContextMenu = (event,seats) => {
    console.log(seats.seats.BedId)
    setId(seats.seats.BedId)
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6
           
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };
  const handler=(id)=>{
    console.log(id)
  }
 
    return(
<react.Fragment>
    <Navbar2/>
    <main>
    <div>
    <h1>
    Occupied Beds
    </h1>
    </div>
    
    <div className={styles.container}>
          <div className={styles.tests}>
            {occupiedBeds.map((seats) => (
              <div  className={styles.div2}>
               
                <div key={seats.BedId}
                  className={styles.blood}
                  onContextMenu={(event)=>handleContextMenu(event,{seats})}
                  style={{ cursor: "context-menu" }}
                >
                  <h4>
                    <p  >
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
                    onClose={()=>setContextMenu(null)}
                    anchorReference="anchorPosition"
                    anchorPosition={
                      contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                    }
                  >
                    <MenuItem onClick={()=>unoccupyBed({seatId})}>Unoccupy</MenuItem>
                  </Menu>
                </div>
              </div>
            ))}
          </div>
        </div>
        </main>
        <Footer/>
    
</react.Fragment>
    );
}
export default OccupiedBeds;