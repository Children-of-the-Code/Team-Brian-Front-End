import * as React from 'react';
export class CreatePost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : ""
        }
    }
    render(){
        return(
            <div id="add-post">
                <h3> Add new post </h3>
                <input type = "textarea" name = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
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
        fetch("https://astrolounge.azurewebsites.net/astroUser/post", {
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