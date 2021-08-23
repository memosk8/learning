// import React, {Component} from "react";

const Component = (props) => {
  return (
    <h2 className="mainComponent">
      <em> {props.msg} </em> {props.localVar}
    </h2> );
};

// class Componente extends Component {
//    render(){
//       return <h2 className="mainComponent">{this.props.msg} </h2>
//    }
// }

// function Componente(props){
//    return <h2 className="mainComponent">{props.msg} </h2>
// }

export default Component;