import { connectToDB } from "@/lib/mongoose";
import { productModel } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

async function GET (){
connectToDB()
const product =  await productModel.find()
return NextResponse.json(product)
}

async function POST(req,res){
    console.log("req",req.body,"res",res)
connectToDB()
const body = NextRequest
// console.log(body)
const product =  new productModel()
return NextResponse.json(product)
}


export {GET,POST}