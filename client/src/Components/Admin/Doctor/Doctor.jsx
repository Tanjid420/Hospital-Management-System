import React, { useState } from "react";
import styles from "./Doctor.module.css"
import ShortProfile from "../../ShortProfiles/ShortProfile/ShortProfile";
import PieChart from "../../Chart/LineChart/PieChart/PieChart";
const Doctor=(props)=>{
    let [name,setName]=useState("")
    const onChangeHandler=(e)=>{
        // console.log(e)
        setName(e);

    }
    const doctorInformation=[{
        id:1,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/192086142_2891299967791830_4150376026783113716_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=t4JCOjcOgOAAX9s_Jnq&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT8fLN_3U-rN59LA4wErjPJodKu7dXN0k8G63eRTE_6qwg&oe=62A4FF51"
    },
    {
        id:2,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics"
        ,
        image:"https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/86213540_185214169235709_8530159642355957760_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=e3f864&_nc_ohc=6QU-9ZlfXw8AX82Lmr9&tn=OfJR_KGEY3-6qA_B&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_fuByUGP3GL-vXWu36yf9l8-Xvs6ZToO2ROCEXQbiemg&oe=62A7DCA6"

    },{
        id:3,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/86213540_185214169235709_8530159642355957760_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=e3f864&_nc_ohc=6QU-9ZlfXw8AX82Lmr9&tn=OfJR_KGEY3-6qA_B&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_fuByUGP3GL-vXWu36yf9l8-Xvs6ZToO2ROCEXQbiemg&oe=62A7DCA6"

    },{
        id:4,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/86213540_185214169235709_8530159642355957760_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=e3f864&_nc_ohc=6QU-9ZlfXw8AX82Lmr9&tn=OfJR_KGEY3-6qA_B&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_fuByUGP3GL-vXWu36yf9l8-Xvs6ZToO2ROCEXQbiemg&oe=62A7DCA6"

    },
    {
        id:5,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
    {
        id:6,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics"
        ,
        image:"https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },{
        id:7,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }]
    const clickHandler=(id)=>{
        console.log(id);

    }
    return(
       <div className={styles.container}>
           <div className={styles.doctorChart}>
                   <PieChart height={400} width={400}/>
           </div>
       
         <div className={styles.searchBox}>
             <input className={styles.inputBox} value={name} name="name" placeholder="Search..." onChange={(e)=>onChangeHandler(e.target.value)}   type="text"/>
        </div>  
         <div className={styles.doctorProfile}>
               {doctorInformation.map(dInfo=>{
                     return <ShortProfile click={clickHandler} key={dInfo.id} id={dInfo.id} name={dInfo.name} degree={dInfo.degree} department={dInfo.department} image={dInfo.image}/>
               })}
         </div>

       </div>
    )
}
export default Doctor;