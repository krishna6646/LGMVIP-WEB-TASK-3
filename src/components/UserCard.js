import React, { Component } from 'react'

export default class UserCard extends Component {
    render() {
        let {id,email,avatar,first_name,last_name} = this.props;
        return (
                <div className="card" style={{width:"20rem"}} >
                    <img src={avatar} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Id :{id}</h5>
                        <h5 className="card-title">Email :{email}</h5>
                        <h5 className="card-title">First Name:{first_name}</h5>
                        <h5 className="card-title">Last Name:{last_name}</h5>
                    </div>
                </div>
           
        )
    }
}
