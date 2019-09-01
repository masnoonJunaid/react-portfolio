import React, { Component } from "react"
import {  DataConsumer  } from "../context"
import styled from "styled-components"

class Contacts extends React.Component {
  render(){
    const {title,img,link} = this.props.product;
    return(
      <Connect className="connect">
        <div className="block">
          <a href={link} rel="nopener noreferrer" target="_blank">
          <img alt="" src={img}/>
          </a>
        </div>
      </Connect>
    );
  }
}

const Connect = styled.div`
p{
  margin:50%;
}
.block{
  display:block;
  width:40%
  height:40%;
  text-align:center;
  margin-left:auto;
  margin-right:auto;
}
img{
  width:31px;
  object-fit:cover;
  cursor: pointer;
  height:31px;
  margin:3px;

}

img:hover{
  transform:scale(1.2);
}

`


export default Contacts
