import  React, {  Component } from 'react'
import {skills, connect} from './data';

const DataContext = React.createContext() ;
class DataProvider extends Component {
  state = {
    products: skills,
    contacts: connect
  };
  handlDetail = () => {
    console.log("hello from detai");
  };
  addToCart = () =>{
    console.log("hello from add to cart");
  };
  render(){
    return(
      <DataContext.Provider value={{
        ...this.state,
        handlDetail:this.handlDetail,
        addToCart:this.addToCart
      }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

const DataConsumer = DataContext.Consumer;

export {  DataProvider, DataConsumer};
