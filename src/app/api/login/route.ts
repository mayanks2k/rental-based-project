// src/app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    // Example logic to validate the user (replace with your own logic)
    if (username === "user" && password === "password") {
      const token = "fash32kj23j4kh23rghdgj213ghg1C8SfSF";
      return NextResponse.json({ token }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
