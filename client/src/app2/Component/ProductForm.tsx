'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductForm() {
  const [productDetail, setProductDetail] = useState({
    title: '',
    detail: '',
    qunt: 0,
    price: 0,
  });

  const router = useRouter()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.name === "qunt" || e.target.name === "price"
        ? Number(e.target.value)
        : e.target.value,
    }));
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/api/product', {
        method: 'POST',
        body: JSON.stringify(productDetail),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="h-96 w-96 bg-gray-800 p-3 text-white"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col mb-2">
        <label>Title</label>
        <input
          className="p-2 border text-black"
          value={productDetail.title}
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Detail</label>
        <input
          className="p-2 border text-black"
          value={productDetail.detail}
          name="detail"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col mb-2">
        <label>Price</label>
        <input
          type="number"
          className="p-2 border text-black"
          value={productDetail.price}
          name="price"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label>Qnt</label>
        <input
          type="number"
          className="p-2 border text-black"
          value={productDetail.qunt}
          name="qunt"
          onChange={handleChange}
        />
      </div>
      <input
        className="p-2 bg-amber-600 rounded-md cursor-pointer"
        type="submit"
        value="Submit"
      />
    </form>
  );
}
