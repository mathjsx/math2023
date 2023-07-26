import React, { Component } from "react";

class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {
    return (

  
 
      <form onSubmit={this.formSubmit}>

     <>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>Enter your HTML here</p>
</>
<label htmlFor="">
  <p style={{ fontSize: "small" }}>
    <input type="radio" name="no140" style={{ display: "inline-flex" }} />
    <label>205</label>
    <br />
    <input
      type="radio"
      name="no140"
      id="jno140"
      style={{ display: "inline-flex" }}
    />
    <label>155</label>
    <br />
    <input type="radio" name="no140" style={{ display: "inline-flex" }} />
    <label>160</label>
    <br />
    <input type="radio" name="no140" style={{ display: "inline" }} />
    <label>156</label>
    <br />
  </p>
  <div id="rno140" />
  <hr />
</label>

        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            {`$(a^n)^m=a^{n.m}$` } 
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
              {'$(a^n)^m=a^{n.m}$' } 
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            />
               {`$(a^n)^m=a^{n.m}$` } 
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other1"
              checked={this.state.selectedOption === "Other1"}
              onChange={this.onValueChange}
            />
               {`$(a^n)^m=a^{n.m}$` } 
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default MyForm;