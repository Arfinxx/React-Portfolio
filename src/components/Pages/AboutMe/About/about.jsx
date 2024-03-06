import React from "react";
import personal from '../../../../util/personal.json'

const About = () => {

    return(
    <div className="text-center p-3">
        <h1 className="pt-5 pb-3">About.</h1>

    <p class="lead">My name is Arfin and I am an aspiring web-developer. I graduated with a BSc in Mathematical Physics
       and spent over 2 years as a Professional Driving Instructor. The unique skill set I grew through my work and education
      has provided the drive and passion to deepen my knowledge of coding and web-development. To see the other technical experience
       I have taken initiative over, please review my CV below. </p>
    
            <a className="p-3 mt-4 btn btn-primary btn-lg" href={personal.cv} alt="Arfin Tajammal CV" target="_blank" download>
              Arfin Tajammal CV</a>
    </div>
)}

export default About;