import React from 'react'
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

class CreateNewForm extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
    this.props.notify(`a new anecdote '${this.state.content}' created!`,10)
    this.props.history.push('/')
  }

  render() {
    return(
      <div>
        <h2>create a new anecdote</h2> 
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>content</ControlLabel>
            <FormControl
              type='text'
              name='content'
              onChange={this.handleChange}
            />
            <ControlLabel>author</ControlLabel>
            <FormControl
              type='text'
              name='author'
              onChange={this.handleChange}
            />
            <ControlLabel>url for more info</ControlLabel>
            <FormControl
              type='text'
              name='info'
              onChange={this.handleChange}
            />
            <Button type="submit">create</Button>
          </FormGroup>
        </form>
      </div>
    )

  }
}

export default CreateNewForm