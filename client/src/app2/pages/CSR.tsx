"use client"
import { ChangeEvent, useEffect, useState } from 'react';
import DataDisplay from '../../../components/DataDisplay';
import ProductForm from '../Component/ProductForm';
import DeleteButton from '../Component/DeleteButton';

export default function CSRPage() {
  const [data, setData] = useState([]);
  const [productDetail,setProductDeatil] = useState({
    title:"",
    detail:"",
    qunt:0,
    price:0
})

const getProductData = ()=>{
  fetch('http://localhost:3000/api/product',{
      method:"GET",
      cache:"no-cache"
    })
      .then((res) => res.json())
      .then(setData);
} 

  const handaleChange = (e)=>{
    setProductDeatil(prev=>({...prev,[e.target.name]:e.target.value}))
  }

   const handleDelete = async (id:string) => {
    try {
      const res = await fetch(`/api/product/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      console.log('Deleted:', data);
    } catch (error) {
      console.error('Delete failed:', error);
    }
    getProductData()
  };

  useEffect(()=>{
     getProductData()
  },[])

  

  return (
    <div >, 
      <h1>CSR Page</h1>
     <ProductForm />
 <table className="min-w-full table-auto shadow-md rounded-lg overflow-hidden">
  <thead className="bg-green-600 text-white">
    <tr>
      <th className="px-6 py-3">Title</th>
      <th className="px-6 py-3">Detail</th>
      <th className="px-6 py-3">Price</th>
      <th className="px-6 py-3">Qnt</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200 text-black">
    {data.map((el, i) => (
      <tr key={i} className="hover:bg-gray-100 text-center">
        <td className="px-6 py-4">{el.title}</td>
        <td className="px-6 py-4">{el.detail}</td>
        <td className="px-6 py-4">{el.price}</td>
        <td className="px-6 py-4">{el.qunt}</td>
          <td className="px-6 py-4">
            <DeleteButton refetch={()=>getProductData()} id={String(el?._id)} />
          </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}
