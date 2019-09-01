import React from 'react'
import {  DataConsumer  } from '../context';
import SkillList from "./SkillList"
import styled from 'styled-components'
import Contacts from "./Contacts"


class HomePage extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Home>
        <div className="details">
        <h1>Welcome!</h1>
        <p>Front end developer and a 3rd year CSE undergraduate at Aliah University here.</p>
        <p>Available for development of responsive web pages and web applications with react framework and context api.</p>
        </div>
        <div className="skills">
          <div className="tools">
            <h2>Skills and tools</h2>
            <DataConsumer>
                {value =>{
                  return value.products.map(data=> {
                    return <SkillList key = {data.id} product = {data}/>;
                  })
                }}
            </DataConsumer>
            <p className="projects">For Project details visit my github profile <span><a href="https://github.com/1203929"rel="nopener noreferrer" target="_blank">here</a></span></p>
          </div>
          <div className="social">
            <DataConsumer>
              {value => {
                return value.contacts.map(data=> {
                  return <Contacts key={data.id} product = {data}/>;
                });
              }}
            </DataConsumer>
            <h4>Let's work togeather</h4>
          </div>
        </div>
            </Home>
      </React.Fragment>
    )
  }
}

const Home = styled.div`
h1 {
  color:chocolate;
}
h2 {
  color:chocolate;
}

h4{
  color:chocolate;
  margin-left:auto;
  margin-right:auto;
  text-align:center;
}
.details{
  margin-left:20%;;
  margin-right:5%;
  margin-top:3%;
  text-align:left;
}
.skills{
  width:100%;
}

.social{
  margin-top:30%;
  float:right;
  margin-right:10%;
}
.tools{
float:left;
width:50%;
height:100%;
margin-top:5%;
margin-left:20%;
}


.hope{
  height:100%;
  float:right;
  width:40%;
}
P{
  font-family:'Bitter', serif;
}
font-family: 'Manjari', sans-serif;
font-family: 'Bitter', serif;
font-family: 'Righteous', cursive;
font-family: 'Permanent Marker', cursive;
font-family: 'Francois One', sans-serif;
font-family: 'Alfa Slab One', cursive;
font-family: 'Fredoka One', cursive;

`

export default HomePage
