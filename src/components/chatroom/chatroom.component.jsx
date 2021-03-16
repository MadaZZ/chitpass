import React, { useState } from 'react';

import './chatroom.style.css';
import ChatMessage from '../chat-message/chat-message.component';
import { firestore, getCurrentUser } from '../../firebaseUtils/firebaseutils';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = () => {
    const messageRef = firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = getCurrentUser();
        await messageRef.add({
            text: formValue,
            createdAt: new Date(),
            uid,
            photoURL
        })
        setFormValue('');
    }

    return (
        <div className='chatroom-wrapper'>
            <main>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                <button type='submit'>✅</button>
            </form>
        </div>
    );
}

export default ChatRoom;