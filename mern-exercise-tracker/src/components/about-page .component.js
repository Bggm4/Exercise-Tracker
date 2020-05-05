import React, { Component } from 'react';

import "react-datepicker/dist/react-datepicker.css";

export default class AboutClass extends Component {

    render() {
        return (
        <div>
          <h3>Create New Exercise Log</h3>
          <p>This basic web system is to show creating, updating, deleting user items from a database. The stack used
            was the MERN stack, this stack consists off using MongoDB, Express.js, React and finally Node.js. 
            A backend server has been created to host the databsae. This is desgined for a user to be albe to track what
            sort of exercises they are doing. User name, description of activity, duration of activity and the date will be saved.  

          </p>

          <h3>Third party software used to carry this out</h3>
          <p>The code was created in Visual Studio Code-https://code.visualstudio.com/</p>
          <p>Database created on MongoDB- https://cloud.mongodb.com/</p>
          <p>Node js was installed - https://nodejs.org/en/</p>
          <p>Insomnia rest tool to help get a better understanding og the databse - https://insomnia.rest/</p>
          <p>The Project was turned into a react project. Already bulit in</p>
          <p>Axios and DatePicker also install in system</p>
          </div>
        )}
}