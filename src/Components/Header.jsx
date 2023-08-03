import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/Authprovider';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => { })
    .catch(error=>console.error(error))
  }
  return (
    <div>
    
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <Link className="btn btn-ghost normal-case text-xl"  to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Order</Link>
        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
        {
          user ?
            <>
            <span>{user.email}</span> 
              <button onClick={handleLogOut} className='btn btn-xn'>sign Out</button>
            </> : <Link to='/login'>Log in</Link>
      }
      </div>
      
    </div>
  );
};

export default Header;