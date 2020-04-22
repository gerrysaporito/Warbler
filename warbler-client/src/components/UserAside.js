import React from 'react';
import DefaultProileImg from '../images/default-profile-image.jpg';

const UserAside = ({ProfileImageUrl, username}) => (
    <aside className='col-sm-2'>
        <div className='panel panel-default'>
            <div className='panel-body'>
                <img 
                    src={ProfileImageUrl || DefaultProileImg} 
                    alt={username} 
                    className='img-thumbnail' 
                    width='200'
                    height='200'
                />
            </div>
        </div>
    </aside>
);

export default UserAside;
