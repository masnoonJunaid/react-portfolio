import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import "../App.css"

class Navbar extends React.Component {
  render(){
    return (
      <NavWrapper id="navigation">
      <Link to="/" className="name">
      <h1>Masnoon Junaid</h1>
      </Link>
      <Link to="/status" className="status">
      <h3>Status</h3>
      </Link>
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.div`
h3{
  float:right;
  color:white;
}

 h1:hover{
  color:black;
}
 h3:hover{
  color:black;
}
h1{
  color:white;
}

.name{
  text-decoration:none;
  float:left;
  margin-left:4%;
  margin-right:auto;
  text-align:center;
}
.status{
  float:right;
  margin-left:auto;
  margin-right:3%;
}
`

export default Navbar
