import React, { Component } from 'react';
import { useState } from "react";

export class Registration extends Component {
    static displayName = Registration.name;

  constructor(props) {
    super(props);
    //this.state = { currentCount: 0 };
    //this.incrementCounter = this.incrementCounter.bind(this);
  }

  //incrementCounter() {
  //  this.setState({
  //    currentCount: this.state.currentCount + 1
  //  });
  //}

  render() {
      return (
          <MyForm />
      //<div>
      //  <h1>Counter</h1>

      //  <p>This is a simple example of a React component.</p>

      //  <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

      //  <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      //</div>
    );
  }
}

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="login"
                    value={inputs.login || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}
