import React from 'react';
import { Component } from 'react';
import { GITHUB_URL } from '../utils/constant';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(" User Parent Constructor Called")
        // declareing this.state variable with dummy value
        this.state = {
            userInfo: {
                name: 'Adarsh',
                location: 'India',
            },
        };
    }

    async componentDidMount() {
        console.log(" Users Component Did Mount")
        // * API call
        const data = await fetch(GITHUB_URL);
        const json = await data.json();
        //assigning data to state variable
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    
    componentDidUpdate() {
        console.log(' Users Component Did Update');
    }

    componentWillUnmount() {
        console.log(' Users Component Will Unmount');
    }
    render() {
        console.log(" User Parent renders")
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="container mt-5">
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-header p-0'>
                                <div>
                                    <img className='img-fluid p-0'  src={avatar_url} alt={name} />
                                </div>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <h2>Name: {name}</h2>
                                    <h3>Location: {location}</h3>
                                    <h4>Contact: @Adarsh01208</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserClass;
