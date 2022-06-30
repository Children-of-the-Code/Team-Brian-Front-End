 import * as React from 'react';
 export class Addcomment extends React.Component{
     constructor(props :any){
         super(props);
     }
     render(){
         return(<div>
             <h4>Add comment</h4>
             <input type="text"></input>
             <button>Post</button>
         </div>)
     }
 }

// import * as React from 'react';
// export class Addcomment extends React.Component <any , any>{
//     constructor(props : any){
//         super(props);
//         this.state = {
//             inputValue : ""
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h4> Add new comment </h4>
//                 <input type="text" value = {this.state.inputValue} onInput = {event => this.updateInputValue(event)}></input>
//                 <button onClick = {event=>this.submit(event)}>submit</button>
//             </div>
//         )
//     }
//     updateInputValue(event : any){
//         let value = event.target.value;
//         this.setState({
//             inputValue : value
//         })
//     }
//     submit(event : any){
//         let post = this.state.inputValue;
//         fetch("https://astrolounge.azurewebsites.net/astroUser/comment", {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "name": post
//             })
//         });
//     }
// }