import React from 'react';

function Header(props) {
    return (
        <>
            <div className='heading'>
                <h1 className='container text-center'>{props.title}</h1>
            </div>
            <h3 className='text-center enrollment'>Student Enrollment form</h3>
        </>

    )
}

export default Header