import img1 from './Images/planet.png';
import React, {useState} from 'react';
import DropdownItem from './DropdownItem';

export default function Navbar(){

const [open, setOpen] = useState(false);
    return (
    <nav class="navbar bg-light out-nav">
        <div class="container-fluid">
            <img src={img1} className="cb-logo" height={25} width={25} />
            <div className='menu-containered'>
                <div className='menu-triggered' onClick={()=>{setOpen(!open)}}>
                    <img src={img1} />
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