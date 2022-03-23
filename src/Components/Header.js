import React, {Fragment} from "react";
import './header.css';
import logo from'./Images/logo.jpg';

const Header = () => {
    return(
        <Fragment>
            <nav className=".container-fluid bg-secondary">
                <div className="div-header ">
                    <div className="div-logo">
                        <img src={logo} className="img-fuild max-width: 500px"/>
                    </div>
                </div>
            </nav>
        </Fragment>
        
    )
}

export default Header;