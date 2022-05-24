
import './App.css';
import Content from './content';
import React from 'react';
import { useState } from 'react';






function App() {
  const [name,setname]=useState([""]);

  const apiKey="";

  const url=`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&category=general&country=in`;
 
 const xhr= new XMLHttpRequest();
 xhr.open("GET",url,true);
 xhr.onload=function(){
   let res=JSON.parse(this.responseText);
   if(name.length===1)
   {setname(res.articles);}
   


 }
 xhr.send();
 console.log(name);
 
  return (<div className='container'>
  
    {name.map((ele,index)=>{
      return <Content key={index} title={ele.title} des={ele.content} url={ele.url} index={index}/>;
    })}
  


  </div>
  
  );
}

export default App;
