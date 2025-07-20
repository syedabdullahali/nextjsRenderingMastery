"use client"
import { useEffect, useState } from 'react';
import DataDisplay from '../../../components/DataDisplay';

export default function CSRPage() {
  const [data, setData] = useState(null);
  const [productDetail,setProductDeatil] = useState({
    title:"",
    detail:"",
    qunt:0,
    price:0
})


  useEffect(() => {
    fetch('http://localhost:3000/api/product',{
      method:"POST"
    })
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handaleChange = (e)=>{
    setProductDeatil(prev=>({...prev,[e.target.name]:[e.target.value]}))
  }

  const handaleSubmit = async (e)=>{
    e.preventDefault()
    try{
    // console.log("Hello World")
    const response = await fetch('http://localhost:3000/api/product',{
      method:"POST",
      body:JSON.stringify(productDetail)
    })
    console.log(response)
  }catch (error){
     console.error(error)
  }  
  }

  return (
    <div className='bg-gray-500 '>, 
      <h1>CSR Page</h1>
      <form className='h-96 w-96 bg-gray-800 p-3' onSubmit={handaleSubmit}>
        <div className='flex flex-col'>
          <label>Title</label> 
         <input className='p-4 border' value={productDetail.title} name="title" onChange={handaleChange}/>
        </div>
         <div className='flex flex-col'>
          <label>Detail</label> 
         <input className='p-4 border' value={productDetail.detail} name="detail" onChange={handaleChange}/>
        </div>
         <div className='flex flex-col'>
          <label>Price</label> 
         <input className='p-4 border' value={productDetail.price} name="price" onChange={handaleChange}/>
        </div>
         <div className='flex flex-col'>
          <label>qunt</label>  
         <input className='p-4 border' value={productDetail.qunt} name="qunt" onChange={handaleChange}/>
        </div>
        <input className='p-2 bg-amber-600 rounded-md cursor-pointer' type='submit' name='submit_button'/>
      </form>
    </div>
  );
}
