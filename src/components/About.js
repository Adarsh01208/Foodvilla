import { Component } from 'react';
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);
    console.log(' About Parent Constructor');
  }

  componentDidMount() {
    console.log(' About Component Did Mount');
  }

  componentDidUpdate() {
    console.log(' About Component Did Update');
  }

  componentWillUnmount() {
    console.log(' About Component Will Unmount');
  }

  render() {
    console.log(' About Parent Render');
    return (
      <div>
        <UserClass name={'name'} location={'location'} />
      </div>
    );
  }
};

export default About;