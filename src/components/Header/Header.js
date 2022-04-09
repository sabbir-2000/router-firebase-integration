import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSingOut } = useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>products</Link>
                <Link to='/orders'>orders</Link>
                <Link to='/register'>register</Link>
                <span>{user?.displayName && user?.displayName} </span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSingOut}>Sing out</button>
                        :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;