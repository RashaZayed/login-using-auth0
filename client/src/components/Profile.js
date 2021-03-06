import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

export default()=> {
    const {user , isAuthenticated} = useAuth0();

    return(
        isAuthenticated && 
        <div>
           
            <JSONPretty data={user} />
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
        
    
    )
}