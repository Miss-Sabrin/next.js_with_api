import { readDat } from "@/helper/util";
import { NextResponse } from "next/server";

export async function GET (request) {
    const getDat=await readDat();


    return NextResponse.json(getDat,{status:200})
    
}