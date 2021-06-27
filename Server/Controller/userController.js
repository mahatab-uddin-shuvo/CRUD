import User from '../Model/userSchema.js'

export const getUsers = async(request,response) =>{
    try{
        let user = await User.find();
        response.json(user)
        console.log('data saved')
    }catch(error){
        response.json({message:error.message})
    }
}
export const addUser = async(request,response) =>{
    const user = request.body;
    const newUser = new User(user);

    try{
        await newUser.save();
        response.json(newUser)
        console.log('data saved')
    }catch(error){
        response.json({message:error.message})
    }
}

export const getUserById = async(request,response) =>{
    const id = request.params.id
    console.log(id)
    try{
       const user =  await User.findById(id);
        response.json(user)
    }catch(error){
        response.json({message:error.message})
    }
}


export const editUser = async(request,response) =>{
    const user = request.body
    const editUser = new User(user);

    try{
       const user =  await User.updateOne({_id:request.params.id},editUser);
        response.json(editUser)
    }catch(error){
        response.json({message:error.message})
    }
}

export const deleteUser = async(request,response) =>{
    try{
       const user =  await User.deleteOne({_id:request.params.id});
        response.json("User Deleted Successfully")
    }catch(error){
        response.json({message:error.message})
    }
}