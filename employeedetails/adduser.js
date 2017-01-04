import React from 'react';

class AddUserForm extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	label:'Add User',
        	name:'',
        	empId:'',
        	doj:'',
        	dob:'',
        	address:'',
        	phone:''	
        }
        this.handleAddUserClick = this.handleAddUserClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
   }
   handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
   handleAddUserClick(e){
   		e.preventDefault();
   		this.props.addUserHandler(this.state);
        this.refs.form.reset();
   }
   componentWillMount(){
   		let self=this;
   	 	if(this.props.updateUser !== ''){
   	 		this.setState({label: 'Update'});
   	 		this.props.updateUser.map(function(item) {
            	for(let key in item){
            		self.setState({[key]:item[key]});
            	}
            });            
   	 	}
   	 	else{
   	 		this.setState({label: 'Add User'});
   	 	}
   }
   render() {
      return (
         <div>
            <div className="form-container">
            	<h3>Add User</h3>
            		<form onSubmit={this.handleAddUserClick} ref="form">
						  <div className="form-group">
						    <label>Name:</label>
						    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/ >
						  </div>
						  <div className="form-group">
						    <label>Employee ID:</label>
						    <input type="text" className="form-control" name="empId" value={this.state.empId} onChange={this.handleChange} />
						  </div>
						  <div className="form-group">
						    <label>Date of Joining:</label>
						    <input type="date" className="form-control" name="doj" value={this.state.doj} onChange={this.handleChange}/>
						  </div>
						  <div className="form-group">
						    <label>Date of Birth:</label>
						    <input type="date" className="form-control" name="dob" value={this.state.dob} onChange={this.handleChange}/>
						  </div>
						  <div className="form-group">
						    <label>Address:</label>
						    <textarea className="form-control" name="address" value={this.state.address} onChange={this.handleChange}></textarea>
						  </div>
						  <div className="form-group">
						    <label>Phone #:</label>
						    <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}/>
						  </div>
						  <button type="submit" className="btn btn-primary">{this.state.label}</button>
					</form>
            </div>
         </div>
      );
   }
}

export default AddUserForm;