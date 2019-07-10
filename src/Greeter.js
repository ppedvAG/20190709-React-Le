import React from 'react';
import DateTime from './DateTime';

export default function Greeter(props) {    
    return (
        <div>
            <p>{props.loggedIn === true ? 'Hallo ' + props.user : 'Loggen Sie sich ein'}</p>
            <p>heute ist: <DateTime /></p>
        </div>
    );
    
}