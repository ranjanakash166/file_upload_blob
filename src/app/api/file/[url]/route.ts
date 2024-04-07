import { del } from "@vercel/blob";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(req: NextApiRequest,context: any){
    const { params } = context;
    let { url } = params;
    
    url = decodeURIComponent(url);

    if(!url){
        return NextResponse.json({error:"No URL provided"},{status:400});
    }

    await del(url);
    return NextResponse.json({success:true});
}