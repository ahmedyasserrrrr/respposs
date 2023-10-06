import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Print = () => {
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
        <div className="  my-5 ">
  
    
       <div className="  ">

       <form action="" onSubmit={handlesubmit} >   
       <section class="m-auto my-5 ">
        <div class="row m-auto   ">

            <div class="col-md-2">
             

            </div>
            <div class="col-md-4  col-sm-4 ">
                <label for="">الاسم بالعربي:</label>
                <input type="text" name="NAMEAR" placeholder=" ادخل اسمك بالعربي "  onChange={(e)=>{setNAMEAR(e.target.value)}}  class="form-control  "/>
            </div>
            <div class="col-md-4   col-sm-4 ">
                <label for="">الاسم بالانجليزي :</label>
                <input type="text" name="name" placeholder=" ENTER YOUR NAME "  onChange={(e)=>{setname(e.target.value)}}  class="form-control  "/>
            </div>
        </div>
    </section>
    <section class="m-auto  ">
        <div class="row m-auto   ">

            <div class="col-md-2">
             

            </div>
            <div class="col-md-4 col-sm-4 ">
                <label for="">الاسم المختصر بالعربي:</label>
                <input type="text"  name="NAMEA" placeholder=" المختصر بالعربي "  onChange={(e)=>{setNAMEA(e.target.value)}} class="form-control  "/>
            </div>
            <div class="col-md-4  col-sm-4  ">
                <label for="">الاسم المختصر بالانجليزي:</label>
                <input type="text" name="NAMEEN" placeholder=" ENTER YOUR NAME "  onChange={(e)=>{setNAMEEN(e.target.value)}} class="form-control  "/>
            </div>
        </div>
    </section>
<br />
    <div class="m-auto text-center">
    <Link 
      type="submit" value="Submit" to='/' className='btn btn-success'  onClick={()=>{
        fetch(`http://localhost:3100/mydata`, {
         method: "POST", 
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({name,NAMEAR,NAMEA,NAMEEN}),
   }) }}
   >حفظ</Link>
        <Link  to="/" class="btn btn-danger m-2 ">الغاء</Link>
    </div>
       </form>
  
    </div>


        </div>
    );
}

export default Print;
