import React from 'react';
import { CardImgOverlay, CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import personal from '../../../util/personal.json';


const Home = () => {
    return(

    <Card>
      
      <Card.Body>
      
        <div className='d-flex justify-content-center'>
        <Image src="src\assets\Portrait.jpg" fluid rounded style={{"width": "300px"}} />
        </div>
        <Card.Title>Arfin <span>Tajammal</span></Card.Title>
     
        <Card.Subtitle>Welcome to my Web Portfolio! _</Card.Subtitle>
        <hr/>
        <CardText>This webpage showcases my recent web-development projects and skills.</CardText>
       <div className='d-flex justify-content-center'>
       <Button className='m-1' variant="primary" href='projects'>Projects</Button>
      <Button className='m-1' variant="secondary" href={personal['github-link']} target="_blank">Github Profile: {personal['github-username']}</Button>
      </div>
      </Card.Body>
        
        
      
      

    </Card>
  );
}

export default Home;
