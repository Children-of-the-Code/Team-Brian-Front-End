import * as React from 'react';
export class Adduser extends React.Component <any , any>{
    constructor(props : any){
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
    updateInputValue(event : any){
        let value = event.target.value;
        this.setState({
            inputValue : value
        })
    }
    submit(event : any){
        let post = this.state.inputValue;
        fetch("https://astrolounge.azurewebsites.net", {
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
