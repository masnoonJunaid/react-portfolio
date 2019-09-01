import React from "react";
import styled from "styled-components"
import {  Link  } from "react-router-dom";


class Status extends React.Component{
  render(){
    return(
      <Article>
        <div className="semester">
          <h2>7th semester of cse</h2>
          <article>
            <img alt="" src="images/joker.jpg"/>
            <p><b>Going</b> through a brutual mind attack, caused by current
             semester syllabus, contains microprocessor, DBMS, OS,numerical
              analysis, graph theory. Means a lot to cover within next few months.
              this photogrph is the result of routine gethering during lab session. Daily life
              is like Eat,Code,Sleep and repeat so whenever there is crowd of crazy minds
              around just exhaust frustration.But at hostel repeating the above mention routine.
            </p>
            <p><b>Now </b>It's not a surprise, have been 2 years in such routine and everything is going according to
            the plans I made earlier,but the deadlines are not realistic <b>Someone said "There is no unrealistic goal, only deadlines"</b>, exactly going through.</p>
          </article>
        </div>
        <h5 className="react"> with <span className="unicode">♥</span> react framework</h5>
        <h4>Meet my Cats <a href="https://1203929.github.io/catclicker/" target="_blank"> here</a></h4>
      </Article>
    )
  }
}

const Article  = styled.div`
.unicode{
  color:hotpink;
}
h4{
  margin-left:4%;
}
h5{
  float:right;
  margin-right:3%;
}
h2{
  text-align:center;
}
  p{
    line-height:1.6rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    text-align: justify;
  }
img{
  margin-right:auto;
  background:cover;
  text-align:center;
  margin-left:30%;
  width:40%;
  height:20%;
  border-radius:6%;
  overflow:hidden;
}
img:hover{
  transform:scale(1.1);
  transition:all 1s ease-in-out;
  opacity:1
}


.semester{
  margin-left:auto;
  margin-right:auto;
  background-color:aliceblue;
}
@media screen and (min-width:600px){
  .semester{
    width:50%;
  }
}

`

export default Status;
