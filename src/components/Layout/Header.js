import React from 'react';

function Header() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow text-white">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-white" href="#">Users</a>
                <a className="p-2 text-white" href="#">Create Users</a>
            </nav>
        </div>
    );
};

export default Header;