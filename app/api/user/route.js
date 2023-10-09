import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

connectDB();
export async function POST(req) {
    const { name, age } = await req.json();
    await User.create({ name, age });

    return NextResponse.json({ message: "user created" }, { status: 201 });
}

export async function GET(req) {
    const users = await User.find();

    return NextResponse.json({ users }, { status: 200 })
}