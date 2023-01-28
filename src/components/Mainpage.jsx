import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css"
import { useState } from "react";

const Mainpage =()=>{
    const list = [{keys:"Mainpage",path:"/"},
                  {keys:"Table", path:"/table"}
                ];
    const[display, setDisplay] = useState(false);
    
    const handleClick = ()=>{
        setDisplay(!display);
    }
    return(
        <>
        <div className="menu" onClick={handleClick}>
            <h1>Menu</h1>
        </div>
        <div className={`dropdown ${display ? "visible": "hidden"}`}>
            <ul>
                {list.map((element,index)=>{
                    return(
                        <li key={index}>
                            <Link className="paths" to={element.path}>{element.keys}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </>
    )}
export default Mainpage