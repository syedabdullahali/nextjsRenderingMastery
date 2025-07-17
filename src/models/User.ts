import {Schema,model,models} from "mongoose"
const userSchema = new Schema({
 name:{type:String,default:"random user"},
 email:{type:String,default:"random@gmail.com"},
 city:{type:String,default:"randomArea"}
},{timestamps:true})

export const user =  models.user||model("user",userSchema)