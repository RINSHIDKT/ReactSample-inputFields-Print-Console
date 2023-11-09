import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        FirstName: '',
        LastName: '',
        Age: '',
        PhoneNumber: '',
        Email: '',
        Place: '',
        District: '',
        State: '',
        LandMark: '',
        PinCode: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { FirstName, LastName, Age, PhoneNumber, Email, Place, District, State, LandMark, PinCode } = this.state;
    console.log(
`FirstName: ${FirstName}
LastName: ${LastName}
Age: ${Age}
PhoneNumber: ${PhoneNumber}
Email: ${Email}
Place: ${Place}
District: ${District}
State: ${State}
andMark: ${LandMark}
PinCode: ${PinCode}`
     );

    // console.log('Form Data:', this.state);
  }

  render() {
    return (
   
    <div className="form-container">
    <h2>SAMPLE FORM</h2>
    <form id="input-fields" onSubmit={this.handleSubmit}>
      <div className="form-group">
        {/* <label htmlFor="input1">First Name</label> */}
        <input type="text" name="FirstName" value={this.state.FirstName} onChange={this.handleChange} placeholder="FirstName" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input2">Last Name</label> */}
        <input type="text" name="LastName" value={this.state.LastName} onChange={this.handleChange} placeholder="LastName" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input3">Age</label> */}
        <input type="text" name="Age" value={this.state.Age} onChange={this.handleChange} placeholder="Age" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input4">Phone Number</label> */}
        <input type="text" name="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handleChange} placeholder="PhoneNumber" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input5">Email</label> */}
        <input type="text" name="Email" value={this.state.Email} onChange={this.handleChange} placeholder="Email" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input6">Place</label> */}
        <input type="text" name="Place" value={this.state.Place} onChange={this.handleChange} placeholder="Place" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input7">District</label> */}
        <input type="text" name="District" value={this.state.District} onChange={this.handleChange} placeholder="District" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input8">State</label> */}
        <input type="text" name="State" value={this.state.State} onChange={this.handleChange} placeholder="State" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input9">LandMark</label> */}
        <input type="text" name="LandMark" value={this.state.LandMark} onChange={this.handleChange} placeholder="LandMark" />
      </div>
      <div className="form-group">
        {/* <label htmlFor="input10">PinCode</label> */}
        <input type="text" name="PinCode" value={this.state.PinCode} onChange={this.handleChange} placeholder="PinCode" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
    );
  }
}

export default Form;
