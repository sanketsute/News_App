import React from "react";
import './App.css';

function Content(props){

    const h="#san"+props.index;
    const hh="san"+props.index;
    return( <div className="content">  <p>
    <a  data-bs-toggle="collapse" href={h} role="button" aria-expanded="false" aria-controls="collapseExample">
     <b>Breaking News{props.index+1}</b> :{props.title}
    </a>
    
  </p>
  <div className="collapse" id={hh}>
    <div className="card card-body">
   <p>{props.des} <a href={props.url} target="_blank">Read more</a></p>    
    </div>
  </div></div>);
}
export default Content;