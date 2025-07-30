import ProductForm from "./Component/ProductForm";
import DeleteButton from "./Component/DeleteButton";
import RootComp from "./Component/Test/RootComp";

type ProductType = {
  _id: string;
  title: string;
  detail: string;
  price: number;
  qunt: number;
};



export async function getServerSideProps(){
    try{
        const res = await fetch('http://localhost:3000/api/product')
        if (!res.ok) {
    return { props: { data: [] } };
  }
        const data = await res.json()
          return {props:{data:data,message:"success"}}

    }catch (error){
        console.log(error)
        return {props:{data:[],message:"error"}}
    }
} 

export default function Home({ data }: { data: ProductType[] }) {
  return (
    <div className="min-h-screen p-4 bg-gray-900 text-white">
      <RootComp/>
      <h1 className="text-xl mb-4">Server-Side Rendered Product Page</h1>
      <ProductForm />
      <table className="min-w-full table-auto mt-10 bg-white text-black">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Detail</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-6 py-3">Qnt</th>
            <th className="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((el) => (
            <tr key={el._id} className="text-center">
              <td className="px-6 py-3">{el.title}</td>
              <td className="px-6 py-3">{el.detail}</td>
              <td className="px-6 py-3">{el.price}</td>
              <td className="px-6 py-3">{el.qunt}</td>
              <td className="px-6 py-3">
                <DeleteButton id={el._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
