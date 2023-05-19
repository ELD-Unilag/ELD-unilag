import React from "react";


// the logo div  should be in its own component since it will be used in the footer section too

const Nav = () => {
    return (
        <nav>
           <div className="logo">
            <img src="" alt="eld Logo"/>
            <span>Engineering Ladies Day</span>
           </div>
           <ul>
            <li>Home</li>
            <li>About</li>
            <li>Donations</li>
            <li>Activities</li>
            <li>Resources</li>
            <li>Ladies Board</li>
           </ul>
        </nav>

    );
};

export default Nav;