import React from 'react';

class EmpListTable extends React.Component{
     constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleUpdateClick = this.handleUpdateClick.bind(this);
   }
   handleUpdateClick(rowId){
     this.props.updateClick(rowId);
   }
   handleDeleteClick(rowId){
    this.props.deleteClick(rowId);
   }
    render() {
        let headerComponents = this.generateHeaders(),
            rowComponents = this.generateRows();

        return (
            <table className="table">
                <thead><tr>{headerComponents}</tr></thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    }

    generateHeaders() {
        let cols = this.props.cols; 
        return cols.map(function(colData) {
            return <th key={colData.key}>{colData.label}</th>;
        });
    }

    generateRows() {
        let cols = this.props.cols, 
            data = this.props.data;
        let that  =  this;
        return data.map(function(item) {
            let cells = cols.map(function(colData) {
                return <td key={colData.key}>{item[colData.key]}</td>;
            });
            cells.push(<td key="update"><button className="btn btn-default" onClick={()=>{that.handleUpdateClick(item.id)}}>Update</button></td>);
            cells.push(<td key="delete"><button className="btn btn-default" onClick={()=>{that.handleDeleteClick(item.id)}}>Delete</button></td>);
            return <tr key={item.id}>{cells}</tr>;
        });
    }
}
 export default EmpListTable;



