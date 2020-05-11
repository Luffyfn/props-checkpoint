import React from 'react';
import NoImg from '../Images/no-img-available.png';
import Img from '../Images/profile-img.jpg';

const Profile = (props) => {
    const handleName = () => {
        alert (`The profile user is : ${props.fullName}`);
    }
    return(
        <div style = {{fontSize: 20, padding: 5}} onLoad = {handleName}>
            <div style = {{color: 'red', padding: 5}}>FullName: {props.fullName}</div>
            <div style = {{color: 'green', padding: 5}}>Biography: {props.bio}</div>
            <div style = {{color: 'orange', padding: 5}}>Profession: {props.profession}</div>
            <div style = {{padding: 5}}>
                <img 
                    src = {Img} 
                    alt = "Profile picture" 
                    style = {{
                        width: 300, 
                        height: 300, 
                        borderRadius: 5
                     }}
                />
            </div>             
        </div>
    );
}

Profile.defaultProps = {
    fullName: "No Name", 
    bio: "No Biography", 
    profession: "No Profession", 
    img: <img src = {NoImg} alt = "No img" style = {{width: 300, height: 300, borderRadius: 5}} />
}

export default Profile;