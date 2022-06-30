import * as React from 'react';
import { RegisterUser } from '../component/register';
import { Register } from './adduser';

export class Listofusers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            astroUsers : [],
            currentAstroUser : '',
            currentAstroUser_ID : 0
        }
    }
    componentDidMount(){
        fetch("https://astrolounge.azurewebsites.net/astroUser")
        .then(response => response.json())
        .then(userArray => this.setState({users:userArray}));
    }
    componentDidUpdate(){
    }
    render(){
        return(
            <div className='row'>
                {}
                <div className='column'>
                   
                {this.state.users.map((astroUser=> <astroUserCard name={astroUser.name} astroUser_ID = {astroUser.astroUser_ID} navigateToAstroUserClick = {this.navigateToAstroUsers.bind(this)}></astroUserCard>))}
                </div>
                <div className='column'>
                    <Register currentUser = {this.state.currentuser} user_ID = {this.state.currentAstroUser_ID}/>
                </div>
            </div>
        );
    }
    navigateToAstroUsers(name, id){
        console.log(name);
        this.setState({
            artists:this.state.astroUsers,
            currentUser:name,
            currentuser_ID:id
        })
    }
}