import { Table, TableBody, TableCell, TableHead, TableRow ,makeStyles, Button,Typography} from '@material-ui/core';
import { useEffect, useState } from 'react'
import { getUsers,deleteUser } from '../Service/api'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    width:'90%',
    margin: '50px 0 0 50px'
  },
  thead:{
    '& > *':{
      background:'blue',
      color:'white',
      textAlign:"center",
      fontSize:20
    }
  },
  row: {
    '& > *':{
      fontSize:15,
      textAlign:"center"
    }
  }
})


function AllUsers() {

  const [users, setUsers] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserData = async(id) => {
   await deleteUser(id);
   getAllUsers()
  }
  return (
    <div>
      <Typography variant="h3" style = {{textAlign:"center" ,marginTop:50}}> Student Information</Typography>
   
    <Table className = {classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          {/* <TableCell>Id</TableCell> */}
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone Number</TableCell>
          <TableCell>Date of Birth</TableCell>
          <TableCell>Subjects</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(user => (
          <TableRow className = {classes.row} key={user._id}>
            {/* <TableCell>{user._id}</TableCell> */}
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.dob}</TableCell>
            <TableCell>{user.subjects}</TableCell>
            <TableCell>
              <Button variant='contained' color='primary' style = {{marginRight:10}} component= {Link} to ={`/edit/${user._id}`}> Edit</Button>
              <Button variant='contained' color='secondary'onClick={()=> deleteUserData(user._id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
  export default AllUsers;