import React from 'react';
import ReactDom from "react-dom";
import './index.css'


const Person = ({img, name, job, children}) => {
  const url = `https://images.unsplash.com/photo-1597621784730-4ad9816d71bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80`
  return (
    <article className="person">
      <img src={url}  alt="person image"/>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}



const PersonList = () => {
  return( 
  <section className="person-list">
    <Person img="34" name="john" job="developer"/>
    <Person img="34" name="bob" job="designer">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, neque!
    </Person>
    <Person img="34" name="david" job="the boss"/>
  </section> 
  );
}




ReactDom.render(<PersonList></PersonList>, document.getElementById('root'))
