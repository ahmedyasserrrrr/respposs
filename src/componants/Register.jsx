import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const[name,setname]=useState('');
  const[NAMEAR,setNAMEAR]=useState('');
  const[NAMEA,setNAMEA]=useState('');
  const[NAMEEN,setNAMEEN]=useState('');
  const[error,seterror]=useState(false);

  
      
  const handlesubmit=(e)=>{
      e.preventDefault();
      if(name.length ==0 && NAMEAR.length == 0 && NAMEA.length==0 ){
        seterror(true)
      }
    
    }
    
    return (
      <div>
      <div className="cardd tett-center my-5 ">
<form  onSubmit={handlesubmit} className="  mb-3 " >
<label htmlFor="name">اسمك بالانجليزي:</label>
<input type="text" id="name" name="name" placeholder=" ENTER YOUR NAME "  onChange={(e)=>{setname(e.target.value)}}  />
{error && name.length <=0 ? <small className='text-danger text-center h-50 '>Please enter your name</small> : '' }
<label htmlFor="email"> اسمك بالعربي  : </label>
<input type="NAMEAR" id="NAMEAR" name="NAMEAR" placeholder=" ادخل اسمك بالعربي "  onChange={(e)=>{setNAMEAR(e.target.value)}} />
{error && NAMEAR.length <=0 ? <small className='text-danger text-center h-50 '>Please enter your Gmail</small> :'' }
<label htmlFor="password">الاسم المختصر بالعربي:</label>
<input type="NAMEA" id="NAMEA" name="NAMEA" placeholder=" المختصر بالعربي "  onChange={(e)=>{setNAMEA(e.target.value)}} />
{error && NAMEA.length <=0 ? <small className='text-danger text-center h-50 '>Please enter your Pass..</small> :'' }
<label htmlFor="password">الاسم المختصر بالانجليزي:</label>
<input type="NAMEEN" id="NAMEEN" name="NAMEEN" placeholder=" ENTER YOUR NAME "  onChange={(e)=>{setNAMEEN(e.target.value)}} />
{error && NAMEEN.length <=0 ? <small className='text-danger text-center h-50 '>Please enter your Pass..</small> :'' }

<Link 
type="submit" value="Submit" to='/' className='btn btn-primary'  onClick={()=>{
fetch(`http://localhost:3100/mydata`, {
method: "POST", 
headers: {
 "Content-Type": "application/json",
},
body: JSON.stringify({name,NAMEAR,NAMEA,NAMEEN}),
}) }}
>طباعه</Link>
</form>
</div>
</div>
    );
}

export default Register;
