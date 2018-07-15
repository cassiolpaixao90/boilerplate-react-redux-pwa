import React from "react";
import PropTypes from 'prop-types'

import DesafioContact from './DesafioContact';
const DesafioExperience = ({ title, typeKey, experiences }) => {

  let object = [];
  if( experiences.profile !== undefined){
    if( typeKey == "experience" ){
      object = experiences.profile.experience;
    }else if( typeKey == 'education'){
      object = experiences.profile.education;
    }
  }
  return (
    <div>
      <div className="main-area post-content">
      <h1>{title}</h1>
        <hr className="divider" />
            <section >
              {object.map(exp =>
                <div>
                    <h2>{exp.name}</h2>
                    <p>{exp.date}</p>
                    <p>{exp.description}</p>
                </div>
              )}
            </section>
      </div>
    </div>
    );
};

DesafioExperience.propTypes = {
  experiences: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  typeKey: PropTypes.string.isRequired
};

export default DesafioExperience;
