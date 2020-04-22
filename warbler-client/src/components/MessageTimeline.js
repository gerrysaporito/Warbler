import React from 'react';
import MessageList from '../containers/MessageList';
import UserAside from './UserAside.js';

const MessageTimeline = props => {
    return(
        <div className='row'>
            <UserAside 
                profileImageUrl={props.profileImageUrl}
                username={props.usernames}
            />
            <MessageList />
        </div>
    )
}

export default MessageTimeline;
