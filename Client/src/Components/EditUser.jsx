import { FormGroup,FormControl,InputLabel,Input, Button,makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import {editUser, getUsers} from '../Service/api'
import {useHistory , useParams} from 'react-router-dom'

const useStyle = makeStyles({
  container:{
    width:'50%',
    margin:'5% 0 0 25%',
    '& > *':{
      marginTop:20
    }
  }
}) 

const initialValues = {
     name:'',
     email:'',
     phone:'',
     dob:'',
     subjects:''
}

const EditUser = () => {
  const [user,setUser] = useState(initialValues);
  const {name,email,phone,dob,subjects} = user;
  const {id} = useParams();
  const classes = useStyle();
  const history = useHistory()



  useEffect(()=>{
      loadUserData();
      console.log(id)
      console.log(name)
    },[]);
  const loadUserData = async() =>{
    const response = await getUsers(id);
    setUser(response.data)
  }

  const onValueChange = (e) =>{
    console.log(e.target.value);
    setUser({ ...user,[e.target.name]:e.target.value})
    console.log(user)
  }

  const editUserDetails = async() =>{
    await editUser(id,user);
    history.push('/all');
  }

    return(
      <FormGroup className = {classes.container}>
        <Typography variant="h4">Edit Student Information</Typography>
        <FormControl>
          <InputLabel required>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name' value={name} type="text"/>
        </FormControl>
        <FormControl>
          <InputLabel required>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email' value={email} type="email"/>
        </FormControl>
        <FormControl>
          <InputLabel required>Phone Number</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} type="number"/>
        </FormControl>
        <FormControl>
          <InputLabel required>Date of Birth</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='dob' value={dob} type="text"/>
        </FormControl>
        <FormControl>
          <InputLabel required>Subjects</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='subjects' value={subjects} type="text"/>
        </FormControl>
        <Button variant="contained" onClick={()=> editUserDetails()} color="primary">Edit User</Button>
      </FormGroup>
    )
  }
  export default EditUser;