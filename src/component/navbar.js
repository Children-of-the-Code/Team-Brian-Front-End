import {Link} from 'react-router-dom';
import * as React from 'react';

export class Navbar extends React.Component {
    render(){
        return(
            <div>
                <Link to="/AddComment">Create Post </Link>
                <Link to="/AddPost">Post Comment </Link>
                <Link to="/PostList">See All Posts </Link>
            </div>
        )
    }
}