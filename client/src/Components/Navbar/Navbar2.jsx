import React from 'react'
import "./Navbar2.css";
import {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
    const [dropdown,setDropdown]=useState(false);
    const showDropDown = ()=>{
        setDropdown(true);
    }
    const hideDropDown = ()=>{
        setDropdown(false);
    }

  return (
    <React.Fragment>
        <div className="div1">
        <div className="div2"><h3>Hospital</h3></div>
        <div className="div3"><NavLink to="/">Home</NavLink>
        <NavLink  to="/aboutus">About Us</NavLink>
        <a href='#' className="links" onMouseEnter={showDropDown}
                  onMouseLeave={hideDropDown} >Services {dropdown ?(<ul className="dropdown_list">
                    <NavLink to="services/bloodbank">
                      <li className='lists'>Blood Bank</li>
                    </NavLink>
                    <NavLink to="/chemotherapy">
                      <li className='lists'>Chemo Therapy</li>
                    </NavLink>
                    <NavLink to="/counseling">
                      <li className='lists'>Counseling</li>
                    </NavLink>
                    <NavLink to="/diabetescenter">
                      <li className='lists'>Diabetis Center</li>
                    </NavLink>
                    <NavLink to="/emergency">
                      <li className='lists'>Emergency</li>
                    </NavLink>
                    <NavLink to="/pharmacy">
                      <li className='lists'>Pharmacy</li>
                    </NavLink>
                    <NavLink to="/physiotherapy">
                      <li className='lists'>Physiotherapy</li>
                    </NavLink>
                    <NavLink to="/prayerroom">
                      <li className='lists'>Prayer Room</li>
                    </NavLink>
                    <NavLink to="/roomcategory">
                      <li className='lists'>Room Catrgory</li>
                    </NavLink>
                    <NavLink to="/strokecenter">
                      <li className='lists'>Stroke Center</li>
                    </NavLink>
                    <NavLink to="/vaccination">
                      <li className='lists'>Vaccination</li>
                    </NavLink>
                  </ul>):null}</a>
        <NavLink to="/contact">Contact</NavLink></div>
        </div>
    </React.Fragment>
  );
}

export default Navbar2;
