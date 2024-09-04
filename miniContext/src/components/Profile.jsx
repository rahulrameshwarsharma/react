import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div className='mainWrapper'><span>Please Login</span></div>
    return <div className='mainWrapper'><span>Welcome {user.username}</span></div>
}

export default Profile
