import './App.css';

import SignIn from './components/signin/signin.component';
import { SignOut } from './components/signin/signin.component';
import ChatRoom from './components/chatroom/chatroom.component';

import { auth } from './firebaseUtils/firebaseutils';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
