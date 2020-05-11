import React from 'react';
import Profile from './Profile/Profile'
import './App.css';
import PropTypes from 'prop-types';

const App = () => {
  return (
    <Profile 
      fullName = "Fares Nasfi" 
      bio = "Determined and Generous" 
      profession = "Engineer" 
    />  
  );
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string
}
export default App;
