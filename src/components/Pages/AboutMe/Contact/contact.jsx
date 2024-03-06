import React from "react";
import personal from '../../../../util/personal.json'


const Contact = () => {
return(
 <div>

<h1 className="text-center pt-5 pb-5">Contact.</h1>

<div className="d-flex flex-row justify-content-around mt-5">
<h2>Email:</h2><a className="btn btn-success " href={personal.email}>arfin.tajammal@hotmail.com</a>
</div>

<div className="d-flex flex-row justify-content-around mt-5">
<h2>GitHub:</h2><a className="btn btn-success" href={personal["github-link"]} target="_blank">{personal["github-username"]}</a>
</div>

<div className="d-flex flex-row justify-content-around mt-5">
<h2>Linkedin:</h2><a className="btn btn-success" href={personal["linkedin-link"]} target="_blank">{personal["linkedin-username"]}</a>
</div>
        

  
   </div> );
  
  
  }


export default Contact;