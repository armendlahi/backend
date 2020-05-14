import React from 'react';

function Create({ setView }) {

    const handleClick = () => {
        setView('list');
    };

    return (
        <div className="row">
            <div className="col-12">
                <button className="btn btn-outline-success mb-5" onClick={() => handleClick()}>View All</button>
                <h1>Hello</h1>
            </div>
        </div>
    );
}

export default Create;