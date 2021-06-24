export const personAction=(name,age,email,address,phoneno)=>{
   
    return{
        type:"ADD_DETAILS",
        data:{name:name,age:age,email:email,address:address,phoneno:phoneno}
    }
}