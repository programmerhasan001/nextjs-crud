import connectDB from "@/lib/connectDB";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;
    connectDB();
    const singleUser = await User.findOne({ _id: id });

    return NextResponse.json({ user: singleUser }, { status: 200 });
}