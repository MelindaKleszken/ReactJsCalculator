// Calculator Code if you are interested
import React from "react";
import { evaluate } from "mathjs";
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
  return <button onClick={() => handleButton(value)}>{value}</button>;
};
export default App;