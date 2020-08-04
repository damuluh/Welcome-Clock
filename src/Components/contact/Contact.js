import React, { Component } from 'react';

class Contact extends Component {
  constructor(porps) {
    super(porps);

    this.state = {
      submitted: false,
      formData: {
        firstName: '',
        lastName: '',
      },
    };
  }
  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };
  resetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: '',
        lastName: ''
      }
    });
  }
  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you, {this.state.formData.firstName}, for submitting the form.
          </p>
          <button onClick={this.resetForm}>Reset Form</button>
        </div>
      );
    }
    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
              required
              minLength
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.formData.lastName}
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Sumit Form</button>
        </form>

        <details open>
           {this.state.formData.firstName}
          <summary>User-Supplied</summary>
          <br />
          {this.state.formData.lastName}
        </details>
      </div>
    );
  }
}

export default Contact;
