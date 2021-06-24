import React,{useState} from 'react';


 const Contact=({persondetails,changeperson})=> {
     //console.log(persondetails)
    const pdata=persondetails.map(x=>(
        <tr>
        <td> {x.name}</td>
        <td> {x.age}</td>
        <td> {x.email}</td>
        <td> {x.address}</td>
        <td> {x.phoneno}</td>

     </tr>
    ));
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [email, setEmail]=useState("")
    let [address,setAddress]=useState("")
    let [phoneno,setPhoneno]=useState("")
        return (
            <div>
                <table className="table">
                    <tbody>
                      <tr>
                          <td>name</td>
                          <td><input type="text" onChange={(e)=>setName(e.target.value)} value={name} /></td>
                      </tr>
                      <tr>
                          <td>age</td>
                          <td><input type="number" onChange={(e)=>setAge(e.target.value)} value={age} /></td>
                      </tr>
                      <tr>
                          <td>email</td>
                          <td><input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/></td>
                      </tr>
                      <tr>
                          <td>address</td>
                          <td><input type="text" onChange={(e)=>setAddress(e.target.value)} value={address}/></td>
                      </tr>
                      <tr>
                          <td>phone number</td>
                          <td><input type="number" onChange={(e)=>setPhoneno(e.target.value)} value={phoneno}/></td>
                      </tr>
                      <tr><td style={{textAlign:"center"}}><button className="btn btn-success" onClick={()=>changeperson(name,age,email,address,phoneno)}>submit</button></td></tr>
                      </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>email</th>
                            <th>address</th>
                            <th>phone num</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {pdata}
                        </tbody>
                </table>
                
                {/* <button onClick={changeperson}>Clickme</button> */}
            </div>
        )
}

export default Contact
