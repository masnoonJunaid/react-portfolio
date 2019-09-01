import  React, {  Component } from 'react'
import {skills, connect} from './data';

const DataContext = React.createContext() ;
class DataProvider extends Component {
  state = {
    products: [],
    contacts: []
  };
  componentDidMount() {
    this.setProducts();
    this.setData();
  }
  setProducts = () => {
    let tempProducts = [];
    skills.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(()=> {
      return {  products: tempProducts  };
    });
  };

  setData = () => {
    let tempData = [];
    connect.forEach(item => {
      const singleItem = {...item};
      tempData = [...tempData, singleItem];
    });
    this.setState(()=> {
      return {contacts:tempData};
    });
  }


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
