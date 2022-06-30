import * as React from 'react';
export class AstroLogin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : ""
        }
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                    <p>Username</p>
                    <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                    <p>Password</p>
                    <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input> */
                <button onClick = {event=>this.submit(event)}>submit</button>
            </div>
        )
    }
    updateInputValue(event){
        let value = event.target.value;
        this.setState({
            inputValue : value
        })
    }
    submit(event){
        let post = this.state.inputValue;
        fetch("https://astrolounge.azurewebsites.net/astroUser/login", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": post
            })
        });
    }
}