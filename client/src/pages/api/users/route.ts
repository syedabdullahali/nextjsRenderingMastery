import {connectToDB} from "@/lib/mongoose"
import {NextResponse} from "next/server"
import {user} from "@/models/User"

export async function GET(){
await connectToDB()
const userData = await user.find()
return  NextResponse.json(userData)
}