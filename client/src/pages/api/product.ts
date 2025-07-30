import { connectToDB } from "../../lib/mongoose";
import { productModel } from "../../models/Product";


const handler = async (req,res)=>{
try{
  if(req.method==="GET"){
    const data = await productModel.find()
    res.status(200).json({data:data,message:"Success"})
  }
}catch(error){
res.status(500).json({data:[],message:"Something went wrong"})
}
}



export default handler








































// GET all or POST new
// import { connectToDB } from "../../lib/mongoose";
// import {productModel} from "../../models/Product";

// export default async function handler(req, res) {
//   await connectToDB();

//   if (req.method === "GET") {
//     console.log(req.method)
//     const products = await productModel.find();
//     return res.status(200).json(products);
//   }

//   if (req.method === "POST") {
//     const { title, detail, price, qunt } = req.body;
//     const product = await productModel.create({ title, detail, price, qunt });
//     return res.status(201).json(product);
//   }

//   res.status(405).json({ message: "Method Not Allowed" });
// }
