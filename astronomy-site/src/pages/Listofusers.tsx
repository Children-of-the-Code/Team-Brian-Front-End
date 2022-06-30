import * as React from 'react';
import { RegisterUser } from '../component/register';
import { Register } from './adduser';
export class Getallusers extends React.Component<{}, { astroUsers: string }> {
}

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
                   
                {this.state.astroUsers.map((user: { firstname: any; latsname: any; email: any; username: any; password: any; })=> <RegisterUser firstname={user.firstname} lastname = {user.latsname} email = {user.email} username = {user.username} password = {user.password} navigateToUserClick = {this.navigateToUsers.bind(this)} ></RegisterUser>)}
                </div>
                <div className='column'>
                    <Register currentUser {this.state.currentAstroUser} user_ID = {this.state.currentAstroUser_ID}/>
                </div>
            </div>
        );
    }
    navigateToUsers(name : any, id : any){
        console.log(name);
        // I want to navigate to the artist i clicked on
        this.setState({
            artists:this.state.astroUsers,
            currentUser:name,
            currentuser_ID:id
        })
    }
}