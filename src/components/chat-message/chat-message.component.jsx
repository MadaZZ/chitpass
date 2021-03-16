import React from 'react';
import './chat-message.style.css';
import { getCurrentUser } from '../../firebaseUtils/firebaseutils'

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === getCurrentUser().uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <p>{text}</p>
            <img src={photoURL || `https://i.pravatar.cc/150?u=${uid}`} alt='avatar' />
        </div>
    )
}

export default ChatMessage;