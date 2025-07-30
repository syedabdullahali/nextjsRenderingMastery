import { connectToDB } from "@/lib/mongoose";
import { productModel } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

async function GET (){
connectToDB()
const product =  await productModel.find()
return NextResponse.json(product)
}

async function POST(req:NextRequest){
const body = await req.json(); 
connectToDB()
console.log(body)
const product =  new productModel({...body})
const response = await product.save()

return NextResponse.json(response)
}

export {GET,POST}