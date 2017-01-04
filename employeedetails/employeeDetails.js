import React from 'react';
import EmpListTable from './employeeList.js'
import AddUserForm from './adduser.js'   

class EmpList extends React.Component {
   constructor(props){
        super(props);
        this.state = {
            data:[
                    { id: 1, name: 'John', empId: '12345',doj:'1999-01-01',dob:'1989-01-01',address: 'Chennai, TN , India',phone:123444555},
                    { id: 2, name: 'Alex', empId: '12345',doj:'1999-01-01',dob:'1989-01-01',address: 'Chennai, TN , India',phone:123444555},
                    { id: 3, name: 'Wright', empId: '12345',doj:'1999-01-01',dob:'1989-01-01',address: 'Chennai, TN , India',phone:123444555},
                    { id: 4, name: 'Dinesh', empId: '12345',doj:'1999-01-01',dob:'1999-01-01',address: 'Chennai, TN , India',phone:123444555},
                    { id: 5, name: 'Karthik', empId: '12345',doj:'1999-01-01',dob:'1989-01-01',address: 'Chennai, TN , India',phone:123444555},
                ],
            cols:[
                    { key: 'name', label: 'Name' },
                    { key: 'empId', label: 'Employee Id' },
                    { key: 'doj', label: 'Date of Joining' },
                    { key: 'dob', label: 'Date of Birth' },
                    { key: 'address', label: 'Address' },
                    { key: 'phone', label: 'Phone' }
                ],
            showAddUserForm:false,
            updateData:''
        };
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.updateClick = this.updateClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
   }
   handleAddClick(e){
      e.preventDefault();
      this.setState({updateData: ''});
      this.setState({showAddUserForm: !this.state.showAddUserForm});
   }
   handleAddUser(newUser){
      this.setState({updateData: ''});
      this.state.data = this.state.data.filter(function( obj ) {
            return obj.id !== newUser.id;
      });
      if(!newUser.id){
        newUser.id = this.state.data.length+1;
      }
      this.state.data.splice(newUser.id,0,newUser);
      this.setState({showAddUserForm: !this.state.showAddUserForm});
   }
   updateClick(rowId){
      this.setState({showAddUserForm: !this.state.showAddUserForm});
      this.state.updateData = this.state.data.filter(function( obj ) {
            return obj.id === rowId;
      });
   }
   deleteClick(rowId){
      this.state.data = this.state.data.filter(function( obj ) {
            return obj.id !== rowId;
      });
      this.setState({updateData: ''});
      this.setState({data: this.state.data});
   }
   render() {
      return (
         <div>
            {this.state.showAddUserForm && < AddUserForm addUserHandler={this.handleAddUser} updateUser={this.state.updateData}/>}
            <h3>Empolyee List</h3>
            <div className="buttonContainer">
                <button className="btn btn-primary marRight10" onClick={this.handleAddClick}>Add User</button>
            </div>
            <EmpListTable cols={this.state.cols} data={this.state.data} updateClick={this.updateClick} deleteClick={this.deleteClick}/>
         </div>
      );
   }
}

export default EmpList;