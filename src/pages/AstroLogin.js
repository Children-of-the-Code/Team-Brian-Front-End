import * as React from 'react';
export class AstroLogin extends React.Component {
    constructor(props){
        super(props);
    }
render(){
    return(
        <div>
            <form onSubmit= {event=>this.submit(event)}/>
        </div>
    )}
}