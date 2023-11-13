import { NextResponse } from "next/server";
import connectDB from "@/libs/db";
import Mailbox from "@/models/mailbox";

export async function POST(request) {
    try {
        const { name, address } = await request.json();
        await connectDB();
        await Mailbox.create({ name, address });
        return NextResponse.json({ message: "Mailbox Created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}