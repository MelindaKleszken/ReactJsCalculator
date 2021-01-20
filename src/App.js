import './App.css';
import React from "react" ;  
import { evaluate } from "mathjs";

class App extends React.Component {
  state = {
    total: "",
  };

  /*increaseCount= () => {
    this.setState({total: this.state.total + this.state.number});
  }
  decreaseCount= () => {
    this.setState({total: this.state.total - this.state.number});
  }
  multiplyCount= () => {
    this.setState({total: this.state.total * this.state.number});
  }
  divideCount= () => {
    this.setState({total: this.state.total / this.state.number});
  }
  returnCount= () => {
    this.setState({total: this.state.total });
  }
  clearCount= () => {
    this.setState({total: "0"});
  }

  printNumber = () => {
    this.setState({total: this.state.number + this.state.number});
  }*/
  handleButton = (val)  => {
    if (val === "C") {
      this.setState({total: ""});
    } else if (val === "=") {
      this.setState({ total: evaluate(this.state.total)});
    } else {
      this.setState({total: this.state.total + val});
    }
  };

  render() {
    return (
      <div className='App'>
        <div className="wrapper">
          
          <div className="countHere">
            <h1 className="result">  {this.state.total}  </h1>
            <div className="first-row">
              <CalcButton handleButton={this.handleButton} value={7}/>  
              <CalcButton handleButton={this.handleButton} value={8}/>  
              <CalcButton handleButton={this.handleButton} value={9}/>  
              <CalcButton handleButton={this.handleButton} value={"C"}/>  
            </div>
            <div className="second-row">
              <CalcButton handleButton={this.handleButton} value={4}/>   
              <CalcButton handleButton={this.handleButton} value={5}/>   
              <CalcButton handleButton={this.handleButton} value={6}/>   
              <CalcButton handleButton={this.handleButton} value={"*"}/>   
            </div>
            <div className="third-row">
              <CalcButton handleButton={this.handleButton} value={1}/>   
              <CalcButton handleButton={this.handleButton} value={2}/>   
              <CalcButton handleButton={this.handleButton} value={3}/>   
              <CalcButton handleButton={this.handleButton} value={"/"}/>
            </div>
            <div className="forth-row">
              <CalcButton handleButton={this.handleButton} value={0}/> 
              <CalcButton handleButton={this.handleButton} value={"+"}/> 
              <CalcButton handleButton={this.handleButton} value={"-"}/> 
              <CalcButton handleButton={this.handleButton} value={"="}/>
            </div>            
          </div>
        </div>

      </div>
    );
  }
}

const CalcButton = ({handleButton, value}) => {
  return (
    <button className="all-buttons" onClick={() => handleButton(value)}>{value}</button>
  );
};



export default App;

/*
// Calculator Code if you are interested
import React from "react";
import { evaluate } from "math.js";
import "./App.css";

class App extends React.Component {
  state = {
    total: "",
    buttons: [
      "7",
      "8",
      "9",
      "C",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "/",
      "+",
      "0",
      "-",
      "=",
    ],
  };
  handleButton = (val) => {
    if (val === "C") {
      this.setState({ total: "" });
    } else if (val === "=") {
      this.setState({ total: evaluate(this.state.total) });
    } else {
      this.setState({ total: this.state.total + val });
    }
  };
  render() {
    return (
      <div className="calculator-wrapper">
        <h1 className="screen">{this.state.total}</h1>
        <div className="buttons-group">
          {this.state.buttons.map((item, index) => {
            return (
              <CalcButton
                key={index}
                handleButton={this.handleButton}
                value={item}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
const CalcButton = ({ handleButton, value }) => {
  return (
  <button onClick={() => handleButton(value)}>{value}</button>)
};
export default App;*/