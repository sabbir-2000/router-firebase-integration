import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Hello login</h2>
            <div style={{ marginBottom: '15px' }}>
                <button>Google Sign In</button>
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