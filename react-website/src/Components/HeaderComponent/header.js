import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    Logo
               </div>
                <nav>
                    <ul>
                        <li className="first"><a href="/Homepage">Home</a></li>
                        <li> <a href="/">Products</a></li>
                        <li className="last"> <a href="/">Contacts</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
