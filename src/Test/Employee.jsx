import React, { Component } from 'react';
import Pagination from './Pagination';
import Sidenav from './Sidenav';
import { SearchBar } from './Search';
import { paginate } from './Paginate';

class Empdata extends Component {
  state = {
    list : [],
    searchName : '',
    currentPage : 1,
    pageSize : 6
   }
  
  Fetchfunc = (data) => {
   let Data = data.data;
   console.log(Data)
   this.setState({list : Data})
  }

  componentDidMount(){
   let url = 'http://dummy.restapiexample.com/api/v1/employees';
    fetch(url)
    .then(response => response.json())
    .then(this.Fetchfunc)
   }
   
   DeleteEmp = (empData) => {
    const newList = this.state.list.filter(newVal => newVal.id !== empData.id);
    this.setState({list : newList})
    
   }

   handlePageChange = page => {
    this.setState({currentPage : page});
   }

   handleSearch = event =>{
    this.setState({searchName : event.target.value});
    }
  

	render(){
    let List = this.state.list;

    const Data = paginate(List, this.state.currentPage, this.state.pageSize)

	 return(
      <div>
      <center><h1>Employee Details</h1></center>
      {List.length === 0 && <h2><center>Loading....</center></h2> }
      
      <div className='row'> 
      <Sidenav />

      <div className='col-lg-8 col-md-9 col-sm-9'>
      <h2>Showing {Data.length} records out of {List.length}</h2> 
      <SearchBar onChange = {this.handleSearch}/>

      <table className='table table-striped'>
       <thead>
		  <tr>
		    <th scope='col'>Name</th>
		    <th scope='col'>Age</th>
		    <th scope='col'>Salary</th>
		    <th scope='col'></th>
		  </tr>
	   </thead>	  
	   <tbody>
        {Data.length >0 && Data.filter(nameList => {
          return (nameList.employee_name.toUpperCase().includes(this.state.searchName.toUpperCase() ));
          }).map( (items) => (
         <tr key={items.id}>
         <td>{items.employee_name}</td>
         <td>{items.employee_age}</td>
         <td>{items.employee_salary}</td>
         <td>
         <button className='btn btn-sm btn-danger' onClick = {() => this.DeleteEmp(items)}>Delete</button>
         </td>
         </tr>)
         )}
	   </tbody>
      </table>
      <Pagination 
         totalCount = {List.length}
         currentPage = {this.state.currentPage}
         pageSize = {this.state.pageSize}
         onPageChange = {this.handlePageChange}  />
       </div>  
      </div>

       <center><p><strong>Note :</strong> The Employee data is fetched from the dummy rest api's - http://dummy.restapiexample.com </p></center>
      </div>
	 )
	}	
}

export default Empdata;