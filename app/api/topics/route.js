import connectDB from "@/lib/connectDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req) {
    const allTopics = await Topic.find();

    return NextResponse.json({ topics: allTopics }, { status: 200 });
}

export async function POST(req) {
    const { title, description } = await req.json();
    await Topic.create({ title, description });

    return NextResponse.json({ message: "topic created" }, { status: 201 });
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id');

    const topic = await Topic.find({ _id: id });

    if (!topic) {
        return NextResponse.json({ message: "topic does not exist" }, { status: 404 });
    }

    await Topic.findByIdAndDelete(id);

    return NextResponse.json({ message: "topic deleted" }, { status: 200 })
}