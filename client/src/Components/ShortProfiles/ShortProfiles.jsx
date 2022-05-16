import React, { useEffect,useState } from "react";
import "./ShortProfiles.css"
import ShortProfile from "./ShortProfile/ShortProfile"
const ShortProfiles=()=>{
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
    },{
        id:8,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        id:9,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
    },
    {
        id:10,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics"
        ,
        image:"https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
    },{
        id:11,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
    },{
        id:12,
        name:"shanto",
        degree:"mbbs",
        department:"orthopadics",
        image:"https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
    }]
    let doctorInformation1=[]
   let [state,setState]=useState({
    start:0,
    State:0
   })
    let classes="inner-box2"
      const autoScroll=true;
      let slideInterval;
      let intervalTime=5000;
      const stateHandler=()=>{ 
               
                let curState=state.State+1;
                let curStart=(state.start+4)%doctorInformation.length
                setState({
              start:curStart,
              State:curState
          })
            
          
      }
      function auto() {
        //   console.log("from starting going on ")
          slideInterval = setInterval(stateHandler, intervalTime);
        }
        const clickHandler=(id)=>{
            console.log(id)
        }
      useEffect(()=>{
          if(autoScroll)
          {
              auto();
          }
          return()=>clearInterval(slideInterval);
      },[state])
    //   console.log(`state  ${state.State}`)
      if(state.State%2)
      {
          classes="inner-box2"
          classes+=" "+"hidden"
      }
      else{
        classes="inner-box2"
        classes+=" "+"visible"
      }
  
        //have to use useEffect to render different images after few seconds
         //degree and department has to pass through this to ShortProfile and data will come from database
           //props degree department image
        //    console.log(classes)
       
        // console.log(`doctor information ${doctorInformation1.length}`)
        // console.log("classes ",classes)
        let end=0;
        if(state.start+4>doctorInformation.length)
        {
            end=doctorInformation.length-(state.start+4)
        }
        else{
            end=state.start+4
        }
        // console.log(state.start+"  "+end)
return(
    <div className="container">
        <div className="inner-box1">
        রেতের বেলা একলা এখন
জিরচ্ছে সব শহরতলি
রেতের বেলা একলা এখন
জিরচ্ছে সব শহরতলি
চোখ দুটো খুব পড়ছে মনে
চোখ দুটো খুব পড়ছে মনে
এই কথাটা কেমনে বলি?
চিলতে রোদে পাখনা ডোবায়
        </div>
       <div className={classes}>
        {doctorInformation.slice(state.start,end).map(dInfo=>{
            return <ShortProfile click={clickHandler} key={dInfo.id} id={dInfo.id} name={dInfo.name} degree={dInfo.degree} department={dInfo.department} image={dInfo.image}/>
})}
       </div>
    </div>
)
}
export default ShortProfiles;
