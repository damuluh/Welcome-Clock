import React, { Component } from 'react';
import Jeopardygame from  '../jeopardy/Jeopardygame'
//import our service
import JeopardyService from './JeopardyService';
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
        UserInput: '',
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

    

    let value = this.state.data.value;

    if (this.state.formData.UserInput === this.state.data.answer) {
      this.setState((state) => ({
        score: state.score + value,
      }));
    } else {
      this.setState((state) => ({
        score: state.score - value,
      }));
    }

    this.getNewQuestion()
    this.resetForm()
  };


  resetForm = (event) => {
    this.setState({
      submitted: false,
      formData: {
        UserInput: '',
      },
    });
  };
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //display the results on the screen
  render() {
    let category = 'loading';
    if (this.state.data.category) {
      category = this.state.data.category.title;
    }
    if (this.state.submitted) {
      return (
        <div className='Contact'>
         
          <button onClick={this.resetForm}>Reset Form</button>
        </div>
      );
    }

    return (
      <div>
        
        <Jeopardygame 
        score= {this.state.score}
       question= {this.state.data.question}
        value= {this.state.data.value}
        category= {category}
        

        handleSubmit= {this.handleSubmit}
        handleChange= {this.handleChange}
        UserInput={this.state.formData.UserInput}
        />
       
      </div>
    );
  }
}

export default Jeopardy;
