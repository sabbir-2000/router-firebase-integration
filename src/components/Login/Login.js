import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase()
    return (
        <div>
            <h2>Hello login</h2>
            <div style={{ marginBottom: '15px' }}>
                <button onClick={singInWithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='enter your email address' /><br />
                <input type="password" name="" id="" placeholder='password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;