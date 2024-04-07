import { del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest,context: any){
    const { params } = context;
    let { url } = params;
    
    url = decodeURIComponent(url);

    if(!url){
        return NextResponse.json({error:"No URL provided"},{status:400});
    }

    await del(url);
    return NextResponse.json({success:true});
}