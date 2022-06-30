import * as React from 'react';
export class Register extends React.Component /*<any , any>*/{
    constructor(props : any){
        super(props);
        this.state = {
            inputValue : ""
        }
    }
    render(){
        return(
            <div>
                <h1> Register </h1>
                <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}>
                    {/* <p>First Name</p>
                    <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                    <p>Last Name</p>
                    <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                    <p>Email</p>
                    <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                    <p>Username</p>
                    <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
                    <p>Password</p>
                    <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input> */}
                </input>
                <button onClick = {event=>this.submit(event)}>submit</button>
            </div>
        )
    }
    updateInputValue(event : any){
        let value = event.target.value;
        this.setState({
            inputValue : value
        })
    }
    submit(event : any){
        let post = this.state.inputValue;
        fetch("https://astrolounge.azurewebsites.net/astroUser", {
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