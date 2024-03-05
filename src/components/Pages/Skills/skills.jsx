import React from "react";

const Skills = () => {
    return(
        
<section ClassName="container-fluid text-center" id="skills">
  <div ClassName="section-container"> 
    <h1>My Skills.</h1>
    <div ClassName="line-element"></div>
    <p ClassName="lead">Here are some of the skills and programs I have developed an understanding for so far.
       I hope to grow this skill set over the course of the bootcamp as well as outside of it!</p>
      <h3 ClassName="hover-text">Hover over the icons!</h3>
    <div ClassName="container" id="skills-icons">
      
      <div ClassName="icon-card">
        <div ClassName="icon" id="github">

          <div ClassName="icon-border">
            <span ClassName="fa-brands fa-square-github fa-6x"></span>
          </div>

          <div ClassName="icon-caption">
            <div>
              <h5>GitHub</h5>
              <small>Use of GitHub and maintaining repositories to a professional standard. </small>
            </div>
          </div>

        </div>

      </div>

      <div ClassName="icon-card">
        <div ClassName="icon" id="gitlab">

          <div ClassName="icon-border">
            <span ClassName="fa-brands fa-square-gitlab fa-6x"></span>
          </div>

          <div ClassName="icon-caption">
            <div>
              <h5>GitLab</h5>
              <small>Taking pulls from GitLab.</small>
            </div>
          </div>

        </div>

      </div>

      <div ClassName="icon-card">
        <div ClassName="icon" id="html5">

          <div ClassName="icon-border">
            <span ClassName="fa-brands fa-html5 fa-6x"></span>
          </div>

          <div ClassName="icon-caption">
            <div>
              <h5>HTML5</h5>
              <small>Use of HTML to create webpage content/structure.</small>
            </div>
          </div>

        </div>

      </div>


      <div ClassName="icon-card">
        <div ClassName="icon" id="css">

          <div ClassName="icon-border">
            <span ClassName="fa-brands fa-css3-alt fa-6x"></span>
          </div>

          <div ClassName="icon-caption">
            <div>
              <h5>CSS 3</h5>
              <small>Use of CSS in stylesheets to give HTML webpages styling.</small>
            </div>
          </div>

        </div>

      </div>

      <div ClassName="icon-card">
        <div ClassName="icon" id="bootstrap">

          <div ClassName="icon-border">
            <span ClassName="fa-brands fa-bootstrap fa-6x"></span>
          </div>

          <div ClassName="icon-caption">
            <div>
              <h5>Bootstrap</h5>
              <small>Use and modification of the Bootstrap library and documentation to create professional webpage components.</small>
            </div>
          </div>

        </div>

      </div>

      <div ClassName="icon-card">
        <div ClassName="icon" id="more">
      
          <div ClassName="icon-border">
            <span ClassName="fa-solid fa-circle-chevron-down fa-5x"></span>
          </div>
      
          <div ClassName="icon-caption">
            <div>
              <h5>More to come</h5>
              <small>As I learn more skills from the Bootcamp they will be listed here.</small>
            </div>
          </div>
      
        </div>
      
      </div>

    </div>
  </div>
</section>


    )
};

export default Skills;