
import React, {useState} from 'react';
import DropdownItem from './DropdownItem';
import logo from './Images/Logo.png';
import cb from './Images/cb.png';
import admin from './Images/admin.png';

export default function Navbar(){

const [open, setOpen] = useState(false);
    return (
    <nav class="navbar bg-light out-nav">
        <div class="container-fluid">
            <img src={logo} className="cb-logo" height={25} width={25} />
            <div className='menu-containered'>
                <div className='menu-triggered' onClick={()=>{setOpen(!open)}}>
                    <img src={logo} />
                </div>
                <div className={`dropdown-menues ${open? 'active':'inactive'}`}>
                    <h6> Celestial </h6>
                    <ul>
                        <DropdownItem text = {"Log Out"} />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

//<div className={`dropdown-menues ${open? 'active':'inactive'}`}>
 //                   <h6> Celestial </h6>
 //                   <ul>
 //                       <DropdownItem text = {"Log Out"} />
 //                   </ul>
 //               </div>