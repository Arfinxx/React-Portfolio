import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import projectList from "../../../util/projectList.json"

function Projects() {
  return (
    <>
    <h1 className='text-center pt-5 pb-5'>Projects.</h1>

    <Row xs={1} md={2} className="g-4">
      {projectList.map((project, id) => (
        <Col key={id}>
          <Card>
            <Card.Img variant="top" src={project.screenshot} />
            <Card.Body>
              <Card.Title>{project['project-title']}</Card.Title>
              <Card.Text>
                <Card.Link target='_blank' href={project['deployed-link']}>Deployed Link</Card.Link>
                <Card.Link target='_blank' href={project['repo-link']}>Repository Link</Card.Link>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
      
    </Row>

 </> );


}

export default Projects;
