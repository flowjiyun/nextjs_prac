import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`https://localhost:3200/login`);
  const data = await response.json();

  return NextResponse.json({data});
}