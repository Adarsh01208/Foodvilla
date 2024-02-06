import { Component } from 'react';
// import User from './User';
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
}

// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN

/* 
*  - Parent Constructor()              -- Render Phase
*  - Parent Render()

*    - First Child Constructor()
*    - First Child Render()
*                                      -- Render Phase
*    - Second Child Constructor()
*    - Second Child Render()

*     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
*    - First Child ComponentDidMount()
*    - Second Child ComponentDidMount()

*  - Parent ComponentDidMount()=
*/
export default About;