import React from 'react';
import Profile from './Profile/Profile'
import './App.css';
import PropTypes from 'prop-types';
import Img from './Images/profile-img.jpg';

const App = () => {
  return (
    <Profile 
      fullName = "Fares Nasfi" 
      bio = "Determined and Generous" 
      profession = "Engineer" 
      src = {Img}
      alt = "Profile picture"
    />  
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string
}
export default App;
