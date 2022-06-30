import {Link} from 'react-router-dom';
import * as React from 'react';

export class Navbar extends React.Component {
    render(){
        return(
            <div>
                <Link to="/Addcomment">Create Post </Link>
                <Link to="/Addpost">Post Comment </Link>
                <Link to="/UserList">See All Posts </Link>
            </div>
        )
    }
}