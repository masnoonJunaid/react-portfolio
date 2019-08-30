import React from 'react'
import { Link } from "react-router-dom";
import {  DataConsumer  } from '../context';
import SkillList from "./SkillList"
import styled from 'styled-components'

class HomePage extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Home>
        <div className="details">
        <h1>Welcome!</h1>
        <p>Front end developer and a 3rd year CSE undergraduate at Aliah University.</p>
        <p>Available for development of responsive web pages and web applications with react framework and context api.</p>
        </div>
        <div className="skills">
          <h2>Skills and tools</h2>
          <DataConsumer>
              {value =>{
                return value.products.map(data=> {
                  return <SkillList key = {data.id} product = {data}/>;
                })
              }}
          </DataConsumer>
          <div></div>
          <p className="projects">For Project details visit my github profile <span><a href="https://github.com/1203929"rel="nopener noreferrer" target="_blank">here</a></span></p>
        </div>
        </Home>
      </React.Fragment>
    )
  }
}

const Home = styled.div`
.projects{
  margin-top:42%;
}
.details{
  margin-left:20%;;
  margin-right:5%;
  text-align:left;
}
.skills{
  margin-left:5%
  width:50%;
  float:left;
}
@media screen and (max-width:500px){
  .skills{
    width:100%;
    
  }
}
.hope{
  float:right;
  width:40%;
}

`

export default HomePage
