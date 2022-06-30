import * as React from 'react';
export class AddComment extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <h4>Add Comment</h4>
            <input type="text"></input>
            <button>Post</button>
        </div>)
    }
    updateInputValue(event){
        let value = event.target.value;
        this.setState({
            inputValue : value
        })
    }
    submit(){
        let post = this.state.inputValue;
        fetch("https://astrolounge.azurewebsites.net/astroUser/comment", {
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