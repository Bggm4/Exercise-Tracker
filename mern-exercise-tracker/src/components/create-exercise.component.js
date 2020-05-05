//Create exxercise compnent
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    //getting/ defining the vairables needed
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      //standar empty state 
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  //mounting component sucessful?
  componentDidMount() {
    axios.get('http://localhost:5002/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      //if not catch the error 
      .catch((error) => {
        console.log(error);
      })

  }

  //change username
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  //change description
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  //change duration
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  //change date
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  //request upon hitting submit 
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      //getting new info
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5002/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }


  //Long winded way to rendor it to the screen 
  render() {
    return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}