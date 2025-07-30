"use client"
import { useRouter } from "next/navigation";


const DeleteButton = ({id,refetch}:{id:string,refetch?:()=>void})=>{

    const router = useRouter()
     const handleDelete = async () => {
    try {
      const res = await fetch(`/api/product/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      console.log('Deleted:', data);
    } catch (error) {
      console.error('Delete failed:', error);
    }
    if(refetch){
        refetch()
    }else{
         router.refresh()
    }
  };
    return    <button onClick={()=>handleDelete()} className="px-4 py-2 text-lg bg-red-500 text-white rounded-lg">Delete</button>
}
export default DeleteButton