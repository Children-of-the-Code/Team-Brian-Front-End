import * as React from 'react';
import { RegisterUser } from '../component/RegisterUser';
import { Register } from './Register';

// plan: artist list - clickable list of artists (lets say for a museum directory)
// artist page - a page containing all of an artists paintings
// add artist page
// add painting page

export class Listofusers extends React.Component {
    constructor(props : any){
        super(props)
        this.state = {
            users : [],
            currentUser : '',
            currentUser_ID : 0
        }
    }
    componentDidMount(){
        fetch("https://astrolounge.azurewebsites.net/astroUser")
        .then(response => response.json())
        .then(userArray => this.setState({users:userArray}));
    }
    // componentDidUpdate is a hook that will execute every time the component does some re-render
    componentDidUpdate(){
        // console.log(this.state)
    }
    render(){
        return(
            <div className='row'>
                {}
                <div className='column'>
                   
                {this.state.users.map((user: { firstname: any; latsname: any; email: any; username: any; password: any; })=> <RegisterUser firstname={user.firstname} lastname = {user.latsname} email = {user.email} username = {user.username} password = {user.password} navigateToUserClick = {this.navigateToUser.bind(this)} ></RegisterUser>)}
                </div>
                <div className='column'>
                    <Register currentUser {this.state.currentUser} user_ID = {this.state.currentUser_ID}/>
                </div>
            </div>
        );
    }
    navigateToUsers(name : any, id : any){
        console.log(name);
        // I want to navigate to the artist i clicked on
        this.setState({
            artists:this.state.users,
            currentUser:name,
            currentuser_ID:id
        })
    }
}