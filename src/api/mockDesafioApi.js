import delay from './delay';


const desafio = {
  "profile": {
    "image": "https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png",
    "name": "Brian Walker",
    "profession": "Web Developer",
    "description": "27-year old web developer fromt Colorado Springs with 5+ years of work experience in various fields",
    "contact": {
      "tel": "123-456-7890",
      "cel": "012-345-6789",
      "address": "1490 General Woods. Colorado Springs",
      "website": "brianwalker.co",
      "mail": "mail@brianwalker.co"
    },
    "skills": [
      {
        "name": "Front End",
        "value": "80%"
      },
      {
        "name": "Back End",
        "value": "90%"
      },
      {
        "name": "Writing",
        "value": "75%"
      }
    ],
    "experience": [
      {
        "name": "Front End Developer @ HillSong",
        "date": "January 2014",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
      },
      {
        "name": "PHP Developer @ Creative Wizards",
        "date": "March 2012 - December 2013",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
      },
      {
        "name": "UX Designer @ Graphics MasterMinds",
        "date": "January 2012 - February 2012",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
      }
    ],
    "education": [
      {
        "name": "Web Developer @ Harvard University",
        "date": "August 2006 - May 2010",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
      },
      {
        "name": "Colorado Springs College",
        "date": "August 2003 - May 2006",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
      },
      {
        "name": "UX Designer @ Graphics MasterMinds",
        "date": "January 2012 - February 2012",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
      }
    ]
  }
};


class DesafioApi {

  static getAllDesafio() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], desafio));
      }, delay);
    });
  }

}

export default DesafioApi;
