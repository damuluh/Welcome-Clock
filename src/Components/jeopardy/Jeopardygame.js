import React from 'react'

function Jeopardygame(props) {
    return (


        
        <div>
            <strong>Users Score:</strong> {props.score}
        <br />
        <strong>Question:</strong> {props.question}
        <br />
        <strong>Value:</strong> {props.value}
        <br />
        <strong>Category:</strong> {props.category}
        <br />

        <form onSubmit={props.handleSubmit}>
          <label htmlFor='UserInput'>
            <strong>Answer</strong>
          </label>
          <input
            type='text'
            name='UserInput'
            value={props.UserInput}
            onChange={props.handleChange}
            placeholder='Enter Your Answer'
          />

          <button>Submit Answer</button>
        </form>
        </div>

        
       
    )
}

export default Jeopardygame
