import './App.css';
import React from "react" ;  

class App extends React.Component {
  state = {
    total: 0,
    number: 0
  }

  increaseCount= () => {
    this.setState({total: this.state.total +1});
  }
  decreaseCount= () => {
    this.setState({total: this.state.total -1});
  }
  multiplyCount= () => {
    this.setState({total: this.state.total *2});
  }
  divideCount= () => {
    this.setState({total: this.state.total /2});
  }
  returnCount= () => {
    console.log({total: this.state.total});
  }
  clearCount= () => {
    this.setState({total: 0});
  }

  printNumber = () => {
    this.setState({total: this.state.total});
  }


  render() {
    return (
      <div className='App'>
        <div className="wrapper">
          
          <div className="countHere">
            <h1 className="result">  {this.state.total}  </h1>
            <div className="first-row">
              <CounterButton text="7" buttonFunction={this.printNumber} />  
              <CounterButton text="8" buttonFunction={this.printNumber} /> 
              <CounterButton text="9" buttonFunction={this.printNumber} /> 
              <CounterButton text="C" buttonFunction={this.clearCount} />
            </div>
            <div className="second-row">
              <CounterButton text="4" buttonFunction={this.printNumber} />  
              <CounterButton text="5" buttonFunction={this.printNumber} /> 
              <CounterButton text="6" buttonFunction={this.printNumber} /> 
              <CounterButton text="x" buttonFunction={this.multiplyCount} />
            </div>
            <div className="third-row">
              <CounterButton text="1" buttonFunction={this.printNumber} />  
              <CounterButton text="2" buttonFunction={this.printNumber} /> 
              <CounterButton text="3" buttonFunction={this.printNumber} /> 
              <CounterButton text="÷" buttonFunction={this.divideCount} />
            </div>
            <div className="forth-row">
              <CounterButton text="0" buttonFunction={this.printNumber} /> 
              <CounterButton text="+" buttonFunction={this.increaseCount} />
              <CounterButton text="-" buttonFunction={this.decreaseCount} />
              <CounterButton text="=" buttonFunction={this.returnCount} />
            </div>            
          </div>
        </div>

      </div>
    );
  }
}

const CounterButton = (props) => {
  return (
    <button className="all-buttons" onClick={props.buttonFunction}>{props.text}</button>
  )
}



export default App;
