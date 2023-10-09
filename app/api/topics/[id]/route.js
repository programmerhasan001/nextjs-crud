import connectDB from "@/lib/connectDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    await connectDB();
    const { id } = params;
    const body = await req.json();
    const topic = await Topic.findOne({ _id: id });
    if (!topic) {
        return NextResponse.json({ message: "topic not exist" });
    }

    await Topic.findOneAndUpdate({ _id: id }, body);

    const updatedTopic = Topic.findOne({ _id: id });

    return NextResponse.json({ message: "updated successfully", topic: updatedTopic }, { status: 201 });
}


export async function GET(req, { params }) {
    const { id } = params;
    connectDB();
    const singleTopic = await Topic.findOne({ _id: id });

    return NextResponse.json({ topics: singleTopic }, { status: 200 });
}