import React, { Component } from 'react'
import UserCard from './UserCard'

export default class User extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: false
    }
  }
 
 loadData = async () => {
  let url = "https://reqres.in/api/users?page=1";
  let details = await fetch(url);
  let parsedData = await details.json();
  this.setState({
    data: parsedData.data })

}
  render() {

    return (
      <div className='container my-3  '>
        <h2 className='d-flex justify-content-start'>Task 3 </h2>
        <button type="button" className="btn btn-primary " onClick={this.loadData}>Get User</button>
        <div className='row my-3'>
          {this.state.data.map((element) => {
            return <div className='col md-3' key={element.id}>
              <UserCard id={element.id} email={element.email} first_name={element.first_name} last_name={element.last_name} avatar={element.avatar} />
            </div>
          })}
        </div>

      </div>

    )
  }
}
