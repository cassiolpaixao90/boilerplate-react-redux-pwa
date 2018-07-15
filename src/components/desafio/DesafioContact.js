import React from "react";
import PropTypes from 'prop-types'

import { Link } from "react-router";
import DadosProfile from "../common/DadosProfile";
import SkillsProfile from '../common/SkillsProfile';

const DesafioContact = ({ contact }) => {

  let cont = { tel: '', cel: '', address: '', website: '', mail: '' };
  let dados = { name: '', image: '', profession: '', description: '' };
  let skills = [];

  const styleBorder =(width) => {
    return {
      borderTop: '1px solid #fff',
      width: `${width}`
    }
  };

  const styleColor = { color: '#fff', textAlign: 'center' };
  const displayBlock = { display: 'block'};

  const titleProfile = "Profile";
  const titleContact = "Contact";
  const titleSkills = "Skills";

  if (contact.profile !== undefined) {
    skills = contact.profile.skills;
    cont = contact.profile.contact;
    dados = { name: contact.profile.name, image: contact.profile.image, profession: contact.profile.profession, description: contact.profile.description };
  }

  return (
    <div className="sidebar sidebar-left">

      <DadosProfile dados={dados} />
      <section>
        <div className="profile" style={styleColor}>
          <h3>{titleProfile.toUpperCase()}</h3>
          <hr style={styleBorder("70%")} />
          <p>{dados.description}</p>
        </div>
      </section>

      <section>
        <div style={styleColor}>
          <h3 >{titleContact.toUpperCase()}</h3>
          <hr style={styleBorder("60%")} />
          <span style={displayBlock}>{cont.tel}</span>
          <span >{cont.cel}</span>
          <p>{cont.address}</p>
          <span style={displayBlock}>{cont.website}</span>
          <span>{cont.mail}</span>
        </div>
      </section>

       <section>
        <div style={styleColor}>
          <h3>{titleSkills.toUpperCase()}</h3>
          <hr style={styleBorder("50%")} />
          <SkillsProfile skills={skills} />
        </div>
      </section>
    </div>
  );
};

DesafioContact.protoTypes = {
  contact: PropTypes.array.isRequired
};

export default DesafioContact;
