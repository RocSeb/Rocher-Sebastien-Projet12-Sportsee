import './SelectUser.css';
import React from 'react';

const SelectUser = () => {
    return (
        <section className='user-container'>
            <div className='user12'>
                <a href='http://localhost:3001/user/12'>
                    <img src='/avatar.png' />
                </a>
            </div>
            <div className='user18'>
                <a href='http://localhost:3001/user/18'>
                <img src='/avatar2.png' />
                </a>
            </div>
        </section>
    )
}

export default SelectUser;