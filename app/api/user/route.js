import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    connectDB();
    const { name, age } = await req.json();
    await User.create({ name, age });

    return NextResponse.json({ message: "user created" }, { status: 201 });
}