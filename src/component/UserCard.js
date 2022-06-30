import * as React from 'react';
export class UserCard extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <h3 onClick = {event => this.props.navigateToRegisterClick(this.props.name, this.props.user_ID)}>{this.props.name}</h3>
            </div>
        )
    }
}