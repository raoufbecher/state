import b from './b.jpg'
import React, { Component } from 'react'
class Profile extends Component {
        constructor() {
            super()
            this.state= {
                fullName:'Becher Raouf',
                Profession:'Web Developer',
                adress:'Riadh city(4023)-Sousse',
                photo:b,alt:"photo",
                message:'Welcome to my profile',
                time:0,
                show:false,

            }
        }

        showProfile() {
        this.setState(
            {
            ...this.state,
                show:!this.state.show
            }
        )}
        
        componentDidMount() {
            setInterval( ()=>{
                this.setState((prevState)=>({
                    time:prevState.time+1,
                }));
            }, 1000);
        }
    render() {
        return (
            <div className='profil'>
                {this.state.show && (
                    <>
            <h1 >{this.state.message} </h1>
            <h2>{this.state.fullName} </h2>
            <img src={this.state.photo} alt={this.state.alt}></img>
            <p>Profession: {this.state.Profession} </p>
            <p>Adress: {this.state.adress}</p>
                </>
                )}
                <h1> Compteur: {this.state.time} </h1>
                
            <button style={{fontSize: 'calc(10px + 2vmin)'}} onClick= {()=>this.showProfile()}>Profile</button>
            {/* <button onClick= {()=>this.showProfile()}>hide the profile</button> */}
            </div>
       
        )
    }
}




export default Profile  