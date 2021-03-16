import React from 'react';
import { signInWithGoogle, getCurrentUser, signOut } from '../../firebaseUtils/firebaseutils';

const SignIn = () => {
    return (
        <div className='signin-wrapper'>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
}

export const SignOut = () => {
    return getCurrentUser() && (
        <button className='sign-out' onClick={() => signOut()}> signout </button >
    )
}

export default SignIn;