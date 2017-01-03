import React from 'react';
import EmpList from './employeedetails/employeeDetails.js'

class App extends React.Component {
   render() {
      return (
         <div className="container">
            <EmpList/>
         </div>
      );
   }
}

export default App;