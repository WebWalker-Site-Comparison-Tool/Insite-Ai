import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function GET(req) {

    const url = req.url.slice(req.url.lastIndexOf('/')+1);
    let finalUrl;

    if (url.slice(0, 7) === 'http://') {
        finalUrl = 'https://' + url.slice(8);
    } else if (url.slice(0, 8) !== 'https://') {
        finalUrl = 'https://' + url;
    } else {
        finalUrl = url;
    }

    // Prisma logic to check if URL exists

    // If it exists, prisma logic to return all info related to URL 
}