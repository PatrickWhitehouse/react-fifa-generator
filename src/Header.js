import React, { Fragment } from 'react';

const Header = (props) => {
    return(
        <Fragment>
            <h1>Welcome to the Fifa Generator.</h1>
            <p>Select a league and rating below and a random team will be chosen matching those parameters.</p>
        </Fragment>
    )
}
 
export default Header;