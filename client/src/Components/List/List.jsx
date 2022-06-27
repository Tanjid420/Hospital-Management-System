import React from "react";
import styles from "./List.module.css"
const List=(props)=>{
    // const list=[{
    //     name:"peuly",
    //     building:"A",
    //     room:"11",
    //     contact:"01761058806",
    //     id:1
    // },{
    //     name:"shanto",
    //     building:"A",
    //     room:"12",
    //     contact:"01761058806",
    //     id:2
    // },{
    //     name:"Arnob",
    //     building:"A",
    //     room:"13",
    //     contact:"01761058806",
    //     id:3
    // },{
    //     name:"Fahad",
    //     building:"A",
    //     room:"14",
    //     contact:"01761058806",
    //     id:4
    // }]
    // console.log(props.item.name)
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                {props.textToShow}
            </div>
            <div className={styles.listContainer}>
                <table   border="0" cellspacing="0" cellpadding="0" className={styles.tableContainer}>
                    <tr>
                       {props.header.map((el,id)=>{
                           return(
                               <th className={styles.text} key={id}>{el.name}</th>
                           )
                       })}
                    </tr>
                    {props.list.map((el,id)=>{
                        return(
                            <tr onClick={()=>props.clicked(el.id)} className={id%2?styles.row1:styles.row} key={id}>

                              {Object.values(el).map(el1=>{
                                  return(
                                      <td className={styles.listItem}>{el1}</td>
                                  )
                              })}
                            {/* <td className={styles.listItem}>{el.id}</td>
                            <td className={styles.listItem}>{el.name}</td>
                            <td className={styles.listItem}> {el.building}</td>
                            <td className={styles.listItem}>{el.room}</td>
                            <td className={styles.listItem}>{el.contact}</td> */}
                        </tr>
                        )
                       
                    })}
                </table>
                {/* <div className={styles.name}> */}
                {/* <div className={styles.text}>Name</div>  
                {list.map(el=>{
                return(
                    <div className={styles.listItem} key={el.id}>
                        {el.name}
                    </div>
                )
            })}
                </div>
                <div className={styles.building}>
                <div className={styles.text}>Building</div>  
                {list.map(el=>{
                return(
                    <div className={styles.listItem} key={el.id}>
                        {el.name}
                    </div>
                )
            })}
                </div>
                <div className={styles.room}>
                <div className={styles.text}>Room</div>  
                {list.map(el=>{
                return(
                    <div className={styles.listItem} key={el.id}>
                        {el.name}
                    </div>
                )
            })}
                </div>
                <div className={styles.contact}>
                <div className={styles.text}>Contact</div>  
                {list.map(el=>{
                return(
                    <div className={styles.listItem} key={el.id}>
                        {el.name}
                    </div>
                )
            })}
            </div> */}
            </div>
           
        </div>
    )
}
export default List;