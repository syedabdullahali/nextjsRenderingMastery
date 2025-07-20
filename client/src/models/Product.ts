import {Schema,model,models} from "mongoose"

const productSchema  = new Schema({
    title:String,
    detail:String,
    image:String,
    qunt:Number,
    price:Number
},{timestamps:true})

const productModel = models?.product || model("product",productSchema) 

export {productModel}

