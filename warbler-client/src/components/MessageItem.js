import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImage from '../images/default-profile-image.jpg';

const MessageItem = ({date, profileImageUrl, text, username, removeMessage, isCorrectUser}) => (
    <div>
        <li className='list-group-item'>
            <img src={profileImageUrl || DefaultProfileImage} alt={username} className="timeline-image"	 height='100' width='100' />
            <div className='message-area'>
                <Link to="/">@{username} &nbsp;</Link>
                <span className='text-muted'>
                    <Moment className='text-muted' format='Do MM YYYY'>
                        {date}
                    </Moment>
                </span>
                <p>{text}</p>
                {isCorrectUser && (
                    <button className='btn btn-danger' onClick={removeMessage} href='#'>Delete</button>
                )}
            </div>
        </li>
    </div>
)

export default MessageItem;
