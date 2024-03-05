import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import skillList from '../../../util/skillList.json';

const Skills = () => {
    return(

    <div ClassName="section-container"> 

    <h1 className="text-center pt-5 pb-5">My Skills.</h1>
    <p ClassName="text-center pt-2 pb-2">Here are some of the skills and programs I have developed an understanding for so far.
       I hope to grow this skill set!</p>

    {skillList.map((skill, id) => (
      
      <Accordion defaultActiveKey={0}>
      
      
      <Accordion.Item eventKey={id}>
        <Accordion.Header><h2>{skill.skillName}</h2></Accordion.Header>
        <Accordion.Body>
          <small>{skill.caption}</small>
        </Accordion.Body>
      </Accordion.Item>
      
      </Accordion>
    
    ))}
    
      </div> 
      );
}
export default Skills;