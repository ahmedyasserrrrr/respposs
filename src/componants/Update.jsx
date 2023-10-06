import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Update = () => {
   
    const[date,setdata]=useState([]);    
    const {id} =useParams()    
    useEffect(  ()  =>  {
      axios.get('http://localhost:3100/mydata/' +id)
        .then(res => setdata(res.data))
        .catch(err => console.log(err))
        
    },[] )

    const handle=()=>{
      setdata()
    }
        
 
    return (
        <div>
          <div className="cardd  my-5 ">
          <form action=""    onChange={()=>{
      handle()
    }}  >   
       <section class="m-auto my-5 ">
        <div class="row m-auto  ">

            <div class="col-md-2">
             

            </div>
            <div class="col-md-4  col-sm-4 ">
                <label for="">:الاسم بالعربي</label>
                <input type="text" name="NAMEAR" placeholder=" ادخل اسمك بالعربي " value={date.title}  class="form-control  "/>
            </div>
            <div class="col-md-4   col-sm-4 ">
                <label for="">الاسم بالانجليزي :</label>
                <input type="text" name="name" placeholder=" ENTER YOUR NAME "  value={date.price} class="form-control  "/>
            </div>
        </div>
    </section>
    <section class="m-auto my-5 ">
        <div class="row m-auto  ">

            <div class="col-md-2">
             

            </div>
            <div class="col-md-4 col-sm-4 ">
                <label for="">:الاسم المختصر بالعربي</label>
                <input type="text"  name="NAMEA" placeholder=" المختصر بالعربي "  value={date.category} class="form-control  "/>
            </div>
            <div class="col-md-4  col-sm-4  ">
                <label for="">الاسم المختصر بالانجليزي:</label>
                <input type="text" name="NAMEEN" placeholder=" ENTER YOUR NAME "   class="form-control  "/>
            </div>
        </div>
    </section>

    <div class="m-auto text-center">
    <Link 
      type="submit" value="Submit" to='/' className='btn btn-success'  onClick={()=>{
        fetch(`http://localhost:3100/mydata`, {
         method: "POST", 
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(),
   }) }}
   >حفظ</Link>
        <Link  to="/" class="btn btn-danger m-2 ">الغاء</Link>
    </div>
       </form>
    </div>
        </div>
    );
}


export default Update;
