import * as React from 'react';
export class Home extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <div>
                <div id="header">
                    <h1>Astronomy Forum</h1>
                    <h3>Welcome to the astronomy forum!</h3>
                    <button type="button" id="login">Login</button>
                    <button type="button" id="register">Register</button>
                </div>
                <div id="forum">
                    <h2>Posts</h2>
                    <div id="posts">
                        <p>
                            Posts go here.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}