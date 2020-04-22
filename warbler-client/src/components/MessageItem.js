import React, { Component } from 'react';
import Moment from 'react-moment';
import Link from 'react-router-dom';
import DefaultProfileImage from '../images/default-profile-image.jpg';

const MessageItem = ({date, profileImageUrl, text, username, removeMessage}) => (
    <div>
        <li className='list-group-item'>
            <img src={profileImageUrl || DefaultProfileImage} alt={username} height='100px' width='100px' />
            <div className='text-muted'>
                <span className='text-muted'>
                    <Moment className='text-muted' format='Do MM YYYY'>
                        {date}
                    </Moment>
                </span>
                <p>{text}</p>
                <a className='btn btn-danger' onClick={removeMessage} >Delete</a>
            </div>
        </li>
    </div>
)

export default MessageItem;
