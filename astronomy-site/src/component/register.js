import * as React from 'react';
export class RegisterUser extends React.Component {
    constructor(props){
        // run the constructor of React.Component first
        super(props);

    }
    render(){
        return (
            <div>
                <h3 onClick = {event => this.props.navigateToRgisterClick(this.props.name, this.props.user_ID)}>{this.props.name}</h3>
            </div>
        )
    }
}