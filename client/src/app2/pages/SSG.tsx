// app/ssg/page.tsx

import DeleteButton from "../Component/DeleteButton";
import ProductForm from "../Component/ProductForm";
// import DeleteButton from "../Component/DeleteButton"; // if needed

export default async function SSGPage() {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-white text-xl mb-4">Static Generated Page (SSG)</h1>

      <ProductForm />

      <table className="min-w-full table-auto shadow-md rounded-lg overflow-hidden mt-10">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Detail</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Qnt</th>
            <th className="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-black text-center">
          {data.map((el: any, i: number) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="px-6 py-4">{el.title}</td>
              <td className="px-6 py-4">{el.detail}</td>
              <td className="px-6 py-4">{el.price}</td>
              <td className="px-6 py-4">{el.qunt}</td>
              <td className="px-6 py-4">
                <DeleteButton id={el._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
