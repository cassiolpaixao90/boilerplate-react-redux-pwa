import React from "react";
import PropTypes from 'prop-types'

import DesafioContact  from './DesafioContact';
import DesafioExperience from './DesafioExperience';
const DesafioProfile = ({ desafio }) => {

 return (
    <div>
       <div className="main-area">
         <DesafioExperience  typeKey="experience" title="Work Experience" experiences={desafio} />
         <DesafioExperience  typeKey="education" title="Education" experiences={desafio} />
      </div>
    </div>
    );
};

DesafioProfile.propTypes = {
  desafio: PropTypes.array.isRequired
};

export default DesafioProfile;


