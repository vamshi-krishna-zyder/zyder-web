import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, company, email } = body;

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // For now: log the lead
    console.log("NEW DEMO REQUEST:", body);

    // Later you can:
    // - Save to DB
    // - Send email
    // - Push to CRM
    // - Send Slack notification

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
