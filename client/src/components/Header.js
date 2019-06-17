import React from 'react';
import headerImage from "../images/bookHeader.jpg"

function Header() {
    const headerStyle = {
        "backgroundImage": `url(${headerImage})`,
        "maxWidth": "100vw",
        position: "relative",
        "backgroundSize": "cover",
    }
    return (
        <div style={headerStyle}>
            <h1 className='text-center' > Google Book Search</h1>
            <p className="text-center text-danger"> search books and save it</p>
        </div>
    );
}

export default Header;