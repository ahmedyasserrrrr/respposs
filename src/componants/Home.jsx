import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RiFileEditFill} from 'react-icons/ri';
import html2canvas from 'jspdf-html2canvas';
import jsPDF from 'jspdf';
const Home = () => {
    const [mydata,setmydata]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3100/mydata`)
        .then((response) => response.json())
        .then((data)=> setmydata(data));;
    },[])

    const [acons , setacons] = useState("")
    const [show , setshow] = useState(false);
    const pdfref=useRef();
    const handledelete=(id)=>{
       setshow(true)
     setacons(id)
    }
    
    const handleclose=()=>{
        setshow(false)
    }
    const handledeleteitem=()=>{
        setmydata(item => {
            const newarray=[...item]
            return newarray.filter(item => item.id !== acons )
        })
        setshow(false)
    }

    
    const downloadPDF =()=>{
        const input =pdfref.current;
        html2canvas(input).then((canvas)=>{
            const imgdata=canvas.toDataURL('image/png');
            const pdf= new jsPDF('p', 'mm' , 'a4' , true );
            const pdfWidth=pdf.internal.pageSize.getWidth();
            const pdfHeight=pdf.internal.pageSize.getHeight();
            const imgWidth= canvas.Width;
            const imgHeight= canvas.Height;
            const ratio =Math.min(pdfWidth / imgWidth /pdfHeight / imgHeight );
            const imgY=30;
            const imgX= (pdfWidth-imgWidth * ratio ) / 2;
            pdf.addImage(imgdata , 'PNG' , imgX  , imgY , imgWidth * ratio , imgHeight * ratio );
            pdf.save('invoice.pdf');
        })
}

   
    return (
        <div className='container text-center mt-5  my-5 m-auto  '   ref={pdfref}    >
             <Modal
        show={show}
        onHide={handleclose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Title></Modal.Title>
        <Modal.Body>
        هل انت متأكد من حذف الاسم 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handledeleteitem} >
            حذف
          </Button>
          <Button variant="secondary"onClick={handleclose} >الغاء</Button>
        </Modal.Footer>
      </Modal>


             <section class="m-auto table-hover ">
            <div class="row m-auto  me-5 ">

                <div class="col-md-2 mt-1">
                    
                    <Link  to='/Print' class="btn btn-success mt-4 ">
                       Add +
                    </Link>

                </div>
                <div class="col-md-2 mb-3 ">
                <button className="btn btn-danger mb-3 mt-4" onClick={downloadPDF} > <i class="fa-solid fa-file-pdf text-white  "></i> </button>
                    <button className="btn btn-success m-1 mb-3 mt-4"  ><i class="fa-sharp fa-solid fa-file-excel  text-white "></i></button>
                </div>
                <div class="col-md-6">
                    <input type="text" placeholder=" بحث عن......." class="form-control mt-4  bg-light "/>
                </div>
            </div>
        </section>
       
               

                <div class="col-lg-10   m-auto   ">
   <table className="table table-bordered border-black   m-auto mb-4 table table-hover ">
                    <thead className='text-center m-auto  ' >
                                      
                        <tr className='text-center  '>
                            <th className="text-center">#</th>
                            <th className="text-center m-auto ">اسم الانجليزي</th>
                            <th className="text-center">اسم باللغه العربيه</th>
                            <th className="text-center m-auto">المختصر باللغه العربيه</th>
                            <th className="text-center">المختصر باللغه الانجليزيه</th>
                            <th className="text-center">تعديل</th>
                            <th className="text-center">حذف</th>
                       
                        </tr>
                    </thead>
                    
                    <tbody>

                        { mydata  && mydata.map((item)=>{
                            return(
                                <tr key={item.id} >
                                <td className="text-center">{item.id}</td>
                                <td className="text-center"> {item.title} </td>
                                <td className="text-center">{item.price}</td>
                                <td className="text-center">{item.category}</td>
                                <td className="text-center"></td>
                                <td className="text-center">  <Link to={`/update/${item.id}`} class="btn btn-sm btn-primary" >
                                <RiFileEditFill/>
               </Link> </td>
                                <td className="text-center">  <Link to='/'  class="btn  "    className="btn btn-sm btn-danger m-1 "   type="submit" value="Submit"  
                onClick={()=> handledelete(item.id) }
                                  > 
      <i class="fa-solid fa-trash-can text-white"></i>
      </Link>   </td>
                              
                                
                            </tr>
                            )
                        })}
                           

             
                    </tbody>

                </table>




        </div>
           
               </div>
                
            
         
      
    );
}

export default Home;
