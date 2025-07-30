import { connectToDB } from "@/lib/mongoose";
import { productModel } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

async function DELETE(req:NextRequest,param:{params:{id:string}}){
    console.log(param.params.id)
 const product =  await productModel.findByIdAndDelete(param.params.id)
 return NextResponse.json(product)
}

export {DELETE}
