import React from 'react';
import PropTypes from 'prop-types'


const SkillsProfile = ({ skills }) => {


  const progressBar = (skill) =>{
    return {
      height:'24px',
      width: `${skill.value}`,
      backgroundColor:'#fff'
    };
  };

  const styleBorder =() => {
    return {
      backgroundColor: '#000',
      border: '1px solid #fff'
    }
  };


  return (
    <div>
    {skills.map(skill =>
       <div style={{color: '#fff'}}>
       <p >{skill.name.toUpperCase()}</p>
        <div style={styleBorder()}>
          <div style={progressBar(skill)}></div>
          </div>
        </div>
      )}
    </div>
  );
};

SkillsProfile.propTypes = {
  skills: PropTypes.array.isRequired
};

export default SkillsProfile;
