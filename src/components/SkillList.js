import React,{components} from "react"
import styled from "styled-components";
class SkillList extends React.Component{
  render(){
    const {title,img} = this.props.product;
    return(
      <ImageWrap>
        <div className="images">
          <p>{title}</p>
          <img alt=""src={img}/>
        </div>
      </ImageWrap>
    )
  }
}

const ImageWrap = styled.div`
img{
  width:15%;
  height:15%;
  margin-left:20%;
  margin-top:3%;
}

img:hover{
  transform: scale(1.9);
  transition: all 1s ease-in-out;
}

`
export default SkillList;
